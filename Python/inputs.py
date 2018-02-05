from argument import Argument

env = 'Environment'
saf = 'Safety'
time = 'Time'
com = 'Comfort'
hea = 'Health'
ceco = 'City Economy'
peco = 'Personal Economy'
fit = 'Fitness'

def pecocom(p):
  if p.A <= 4.25:
    return 'Comfort'
  elif p.E <= 3.75:
    return '='
  elif p.sex <= 0.5:
    return 'Comfort'
  else:
    return 'Personal Economy'

trees = {}
trees[(env, saf)] = trees[(time, saf)] = trees[(com, saf)] = trees[(saf, ceco)] = trees[(saf, fit)] = lambda p: 'Comfort'
trees[(env, hea)] = trees[(time, hea)] = trees[(com, hea)] = trees[(hea, ceco)] = trees[(hea, fit)] = lambda p: 'Health'
trees[(env, ceco)] = lambda p: 'Environment'
trees[(time, ceco)] = trees[(time, fit)] = lambda p: 'Time'
trees[(ceco, com)] = trees[(env, com)] = trees[(time, com)] = lambda p: 'Comfort'
trees[(peco, ceco)] = lambda p: 'Personal Economy'
trees[(env, time)] = lambda p: 'Environment' if p.A <= 3.75 else 'Time'
trees[(peco, saf)] = lambda p: 'Personal Economy' if p.O <= 4.25 and P.A > 4.75 else 'Safety'
trees[(saf, hea)] = lambda p: 'Safety' if p.C <= 4.75 else 'Health'
trees[(com, fit)] = lambda p: 'Fitness' if p.N > 3.75 and p.O > 4.25 and p.O <= 6.25 and p.C <= 6.25 else 'Comfort'
trees[(peco, com)] = pecocom

init = Argument('init', 'Why don\'t you cycle from home to work?', 'init')
g2 = Argument('g2', 'We won\'t be able to persuade you to cycle to work. However, do you have any objection to the city investing in initiatives to increase cycling?', 'g2')
arg1 = Argument('arg1', 'people cycle 8 miles on average to go to work', fit, time)
arg2 = Argument('arg2', 'pollution is everyone\'s problem', env)
arg3 = Argument('arg3', 'I live further than 8 miles away', time)
arg4 = Argument('arg4', 'I am not fit enough', fit)
# arg4 = Argument('arg4', 'I am not fit enough because of my weight', fit)
arg5 = Argument('arg5', 'many companies now have secure bike parking for the employees not to waste time on looking for one', time)
# arg6 = Argument('arg6', 'My home is too small to store a bike', peco)
arg7 = Argument('arg7', 'you can have work clothes in a bag and wear cycling clothes', com)
# arg8 = Argument('arg8', 'I lack the stamina for cycling far', fit, hea)
arg9 = Argument('arg9', 'even if cycling does take more time, it is a more relaxing way to travel if you avoid busy roads', hea, com, time)
arg10 = Argument('arg10', 'it takes more time to travel by bike', time)
arg11 = Argument('arg11', 'cycling in a city is unhealthy because of the exposure to the pollution', hea)
arg12 = Argument('arg12', 'cycling saves time because there is no need to find a car parking space', time)
arg13 = Argument('arg13', 'the city can build cycle-only lanes to remove cyclists from the traffic', saf, ceco)
arg14 = Argument('arg14', 'it is unfair everybody has to pay the infrastructures with taxes for the use by only some', peco, ceco)
arg15 = Argument('arg15', 'evidence shows that infrastructures for cyclists favor the local economy generating more taxes for the city to use', ceco)
# arg16 = Argument('arg16', 'I do not like to cycle', com)
arg17 = Argument('arg17', 'studies show that cyclists are subject to lower pollution levels than drivers', hea)
arg18 = Argument('arg18', 'wearing bright cycling clothes makes cycling much safer', saf)
arg19 = Argument('arg19', 'the city can arrange free cycle courses to improve road safety', saf)
arg20 = Argument('arg20', 'cycling is an easy way to get fit', fit)
arg21 = Argument('arg21', 'many cyclists are also shoppers', ceco)
arg22 = Argument('arg22', 'changing clothes does not remove the need to shower', com)
arg23 = Argument('arg23', 'cycling in the city is dangerous for the pedestrians', saf)
arg24 = Argument('arg24', 'each car parking space can accommodate 6 bikes which means more people can be catered for and that can boost the local economy', ceco)
arg25 = Argument('arg25', 'more cyclists means less drivers and less pollution', env)
arg26 = Argument('arg26', 'cycling is cheaper for the citizens than driving or public transportation', peco)
arg27 = Argument('arg27', 'studies show that cyclists come to the shops more frequently than drivers and so are good customers', ceco)
arg28 = Argument('arg28', 'cycling improves weight loss', fit, hea)
arg29 = Argument('arg29', 'you are at risk of rain and your clothes can get wet', com)
arg30 = Argument('arg30', 'cars can carry more shopping than bikes and so contribute more to the local economy', ceco)
arg31 = Argument('arg31', 'work clothes are uncomfortable for cycling', com)
arg32 = Argument('arg32', 'cycle lanes create traffic jams', time, env, ceco)
arg33 = Argument('arg33', 'creating bike parking means less car parking is available and that can affect the local economy', ceco)
arg34 = Argument('arg34', 'changing clothes is just a habit that you do quickly at the start and end of the working day', time, com)
arg35 = Argument('arg35', 'cycling is good for your heart and muscles', hea, fit)
arg36 = Argument('arg36', 'it is a hassle having to change clothes', time, com)
arg37 = Argument('arg37', 'plenty of shops sell unexpensive cycling clothes and equipment', peco)
arg38 = Argument('arg38', 'I cannot physically cycle', hea, fit)
arg39 = Argument('arg39', 'cycling improves your fitness while you are commuting or doing errands', fit)
arg40 = Argument('arg40', 'many companies have shower facilities', com)
arg41 = Argument('arg41', 'cycle-only lanes will decrease shopping because of hassle to drivers', ceco)
arg42 = Argument('arg42', 'time is wasted looking for a secure place to lock the bike', time)
arg43 = Argument('arg43', 'traffic jams encourage people to cycle', time)
arg44 = Argument('arg44', 'buying cycle clothing is too expensive', peco)
arg45 = Argument('arg45', 'my workplace is too far away from my home', time)
arg46 = Argument('arg46', 'cycling in the city is dangerous for the cyclists', saf)
arg47 = Argument('arg47', 'but many cyclists don\'t know how to ride in traffic', saf)
arg48 = Argument('arg48', 'cars kill more pedestrians than bikes', saf)
arg49 = Argument('arg49', 'building cycle lanes is too expensive for the city', ceco)

# init.add_atkers(arg4, arg8, arg10, arg11, arg16, arg23, arg29, arg31, arg38, arg45, arg46, arg6)
init.add_atkers(arg4, arg10, arg11, arg23, arg29, arg31, arg38, arg45, arg46)
g2.add_atkers(arg11, arg23, arg32, arg46, arg49)
arg1.add_atkers(arg3)
# arg2
arg3.add_atkers(g2)
# arg4.add_atkers(arg20, arg28, arg39)
arg4.add_atkers(arg20, arg28, arg35, arg39)
# arg5
# arg6.add_atkers(g2)
arg7.add_atkers(arg22, arg36, arg44)
#arg8.add_atkers(arg35)
# arg9
arg10.add_atkers(arg9, arg12)
arg11.add_atkers(arg17, arg25)
arg12.add_atkers(arg33, arg42)
arg13.add_atkers(arg32, arg41, arg49)
arg14.add_atkers(arg2)
# arg15
#arg16.add_atkers(g2)
# arg17
arg18.add_atkers(arg44, arg47)
# arg19
# arg20
arg21.add_atkers(arg30)
arg22.add_atkers(arg40)
arg23.add_atkers(arg48)
# arg24
# arg25
arg26.add_atkers(arg14)
# arg27
# arg28
arg29.add_atkers(arg7)
arg30.add_atkers(arg27)
arg31.add_atkers(arg7)
arg32.add_atkers(arg43)
arg33.add_atkers(arg24, arg27)
# arg34
# arg35
arg36.add_atkers(arg34)
# arg37
arg38.add_atkers(g2)
# arg39
# arg40
arg41.add_atkers(arg21)
arg42.add_atkers(arg5)
# arg43
arg44.add_atkers(arg37)
arg45.add_atkers(arg1)
arg46.add_atkers(arg13, arg18)
arg47.add_atkers(arg19)
# arg48
arg49.add_atkers(arg15, arg26)

args = {
  'init': init,
  'g2': g2,
  'arg1': arg1,
  'arg2': arg2,
  'arg3': arg3,
  'arg4': arg4,
  'arg5': arg5,
  # 'arg6': arg6,
  'arg7': arg7,
  # 'arg8': arg8,
  'arg9': arg9,
  'arg10': arg10,
  'arg11': arg11,
  'arg12': arg12,
  'arg13': arg13,
  'arg14': arg14,
  'arg15': arg15,
  # 'arg16': arg16,
  'arg17': arg17,
  'arg18': arg18,
  'arg19': arg19,
  'arg20': arg20,
  'arg21': arg21,
  'arg22': arg22,
  'arg23': arg23,
  'arg24': arg24,
  'arg25': arg25,
  'arg26': arg26,
  'arg27': arg27,
  'arg28': arg28,
  'arg29': arg29,
  'arg30': arg30,
  'arg31': arg31,
  'arg32': arg32,
  'arg33': arg33,
  'arg34': arg34,
  'arg35': arg35,
  'arg36': arg36,
  'arg37': arg37,
  'arg38': arg38,
  'arg39': arg39,
  'arg40': arg40,
  'arg41': arg41,
  'arg42': arg42,
  'arg43': arg43,
  'arg44': arg44,
  'arg45': arg45,
  'arg46': arg46,
  'arg47': arg47,
  'arg48': arg48,
  'arg49': arg49
}