from pymongo import MongoClient
from flask import Flask

app = Flask(__name__)
client = MongoClient("mongodb://db:27017")