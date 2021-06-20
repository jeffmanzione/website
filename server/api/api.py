import json
from flask import Response


class Api:
    def __init__(self, app, database, api_name=None):
        self.api_name = api_name or type(self).__name__
        self.app = app
        self.database = database

    def register_method(self, fn, method_name=None):
        method_name = method_name or fn.__name__
        self.app.add_url_rule(self._get_api_endpoint_prefix(method_name),
                              view_func=fn)

    def select(self, query):
        """Run a SQL query to select rows from table."""
        conn = self.database.connect()
        with conn.cursor() as cur:
            cur.execute(query)
            records = [row for row in cur.fetchall()]
            cur.close()
            return Response(json.dumps(records),  mimetype='application/json')

    def _get_api_endpoint_prefix(self, method_name):
        return '/_/api/{api_name}.{method_name}'.format(api_name=self.api_name, method_name=method_name)
