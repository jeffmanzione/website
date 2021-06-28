from flask import Response
import json
from .api import Api, json_dumps_fallback


class ApiRegistry(Api):
    def __init__(self, app, database):
        super().__init__(app, database)
        self.app = app
        self.apis = {}
        self.register_method(self._list_registry, 'list')
        self.register(self)

    def register(self, api):
        self.apis[type(api).__name__] = api

    def _list_registry(self):
        return Response(
            json.dumps(self.apis, default=json_dumps_fallback),
            mimetype='application/json')
