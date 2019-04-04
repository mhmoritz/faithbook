import json
import pkg_resources

_raw_json = pkg_resources.resource_stream(__name__, "feeds.json")
FEEDS = json.load(_raw_json)
