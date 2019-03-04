from flask import Flask, request, jsonify
from flask_cors import CORS
from data import database
app = Flask(__name__)
CORS(app)

@app.route("/")
def default():
    return jsonify(get_feed("friendship"))

@app.route("/feed")
def feed():
    category = request.args.get('category')
    return jsonify(get_feed(category))

def get_feed(category):
    return database.FEEDS[category]
