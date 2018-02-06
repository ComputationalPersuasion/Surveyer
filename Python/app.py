from flask import Flask, request, Response, jsonify
import csv
from participant import Participant
from inputs import trees, args
from operator import itemgetter
import itertools
import random

app = Flask(__name__)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
  return response

NUMOFDEFENDERS = 1
MAXNUMTODEF = 4

rows = {}

def transform_atkers(atkers):
  lst = list(map(lambda a: {'arg': a.arg, 'tag': a.tag}, atkers))
  random.shuffle(lst)
  return lst

def initial_argument():
  return {'arg': args['init'].arg,
          'tag': args['init'].tag,
          'cArgs': transform_atkers(args['init'].atkers)}

def test_pair(t1, t2, features):
  if t1 == t2:
    return t1
  pair = (t1, t2)
  if pair not in trees:
    pair = (t2, t1)
  if pair not in trees:
    raise Error('Pair not in trees')
  return trees[pair](features)

def count_preferred_topics(arg1, arg2, features):
  count = [0, 0]
  for t1 in arg1.types:
    for t2 in arg2.types:
      if t1 == t2:
        continue
      best = test_pair(t1, t2, features)
      if best == t1:
        count[0] += 1
      elif best == t2:
        count[1] += 1
      elif best == '=' or best == '/':
        count[0] += 1
        count[1] += 1
  return count

def preferred(arg1, arg2, features):
  count = count_preferred_topics(arg1, arg2, features)
  ret = None
  if count[0] > count[1]:
    ret = arg1
  elif count[0] < count[1]:
    ret = arg2
  else:
    t1 = arg1.types[0]
    t2 = arg2.types[0]
    best = test_pair(t1, t2, features)
    if best == t1:
      ret = arg1
    elif best == t2:
      ret = arg2
    elif best == '=':
      ret = arg1
  return ret

def counter_args_preferred_count(arg, features):
  counter_args = arg.atkers
  count = {}
  for tag in map(lambda arg: arg.tag, counter_args):
    count[tag] = 0
  for (arg1, arg2) in itertools.combinations(counter_args, 2):
    if arg1.tag == arg2.tag:
      continue
    pref = preferred(arg1, arg2, features)
    count[pref.tag] += 1
  return count

def choose_args_to_attack(chosen_args):
  to_atk = chosen_args
  if len(chosen_args) > 1:
    to_atk = list(filter(lambda a: args['g2'] not in a.atkers, chosen_args))
  if len(to_atk) > MAXNUMTODEF:
    random.shuffle(to_atk)
    to_atk = to_atk[0:MAXNUMTODEF]
  return to_atk

@app.route('/firstcontact', methods=['POST'])
def first_contact():
  json = request.get_json()
  userid = json['userid']
  rows[userid] = Participant(userid)
  if 'features' in json:
    features = json['features']
    rows[userid].features.update(json['features'])
  return jsonify(initial_argument())

@app.route('/post_arguments', methods=['POST'])
def post_arguments():
  json = request.get_json()
  userid = json['userid']
  chosen_args = list(map(lambda t: args[t], json['args']))
  rows[userid].args.append(list(map(lambda a: a.tag, chosen_args)))
  args_to_attack = choose_args_to_attack(chosen_args)
  resp = []
  defense = set()
  for a in args_to_attack:
    count = counter_args_preferred_count(a, rows[userid].features)
    sorted_count = sorted(count, key=lambda p: count[p], reverse=True)
    defense.update(sorted_count[0:NUMOFDEFENDERS])
  for tag in defense:
    arg = args[tag]
    atkers = transform_atkers(arg.atkers)
    resp.append({'arg': arg.arg,
                 'tag': arg.tag,
                 'cArgs': atkers})
  return jsonify(resp)

@app.route('/submit', methods=['POST'])
def submit():
  json = request.get_json()
  userid = json['userid']
  with open('data.csv', 'a', newline='') as csvfile:
    w = csv.writer(csvfile, delimiter=';')
    w.writerow(rows[userid].to_arr())
  return '', 200