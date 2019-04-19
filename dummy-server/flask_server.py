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

@app.route("/allCategories")
def categories():
    return jsonify(_get_list_of_all_categories())

def get_feed(category):
    return database.FEEDS[category]

def _get_list_of_all_categories():
    return list(
        {'key': key, 'displayName': entry['displayName']} for key, entry in database.CATEGORIES.items()
    )
