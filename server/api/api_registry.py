from flask import Response
import json
from .api import json_dumps_fallback

LIST_API_ROUTE = '/_/api/ApiRegistry.list'


class ApiRegistry:
    def __init__(self, app):
        self.app = app
        self.apis = {}

    def register(self, api):
        self.apis[type(api).__name__] = api
        self.app.add_url_rule(LIST_API_ROUTE,
                              view_func=self._list_apis, methods=['GET'])

    def _list_apis(self):
        return Response(json.dumps(self.apis, default=json_dumps_fallback),  mimetype='application/json')
