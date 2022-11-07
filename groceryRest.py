from urllib import response
from flask import Flask, Response
from flask import abort, jsonify, render_template, url_for
from flask.views import View
from werkzeug.routing import Rule
from pymongo import MongoClient,ReturnDocument

import json

app = Flask(__name__)
app.config['DEBUG'] = True

# Register our blueprint and it's endpoints on our app

# Endpoint which makes uses `requests`
@app.route('/')
@app.route('/Grocery', methods=["GET"])
def groceryList():
    client = MongoClient('localhost', 27017)
    db = client['grocery']
    grocery=db['grocery']
    groceries= grocery.find({},{"_id": 0})
    groceryDict = dict()
    for idx, grocery in enumerate(groceries):
        groceryDict[idx]= grocery
    response = jsonify(groceryDict)
    response.headers.add('Access-Control-Allow-Origin', '*')    
    return response
