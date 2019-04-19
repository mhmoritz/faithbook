import json
import pkg_resources

_raw_json = pkg_resources.resource_stream(__name__, "feeds.json")
FEEDS = json.load(_raw_json)
CATEGORIES = {
    "friends": {
        "displayName": "Friends"
    },
    "love": {
        "displayName": "Love"
    },
    "talent": {
        "displayName": "Talent"
    },
    "identity": {
        "displayName": "Identity"
    },
    "studyWork": {
        "displayName": "Study & Work"
    },
    "men": {
        "displayName": "Men"
    },
    "women": {
        "displayName": "Women"
    },
    "challenges": {
        "displayName": "Challenges"
    },
    "family": {
        "displayName": "Family"
    },
    "faith": {
        "displayName": "Faith"
    },
}
