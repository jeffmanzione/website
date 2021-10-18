import datetime
import json
import logging
from flask import Response


class Api:
    def __init__(self, app, database, api_name=None):
        self.api_name = api_name or type(self).__name__
        self.app = app
        self.database = database
        self.methods = {}

    def register_method(self, fn, method_name=None, method_types=['GET']):
        method_name = method_name or fn.__name__
        endpoint = self._get_api_endpoint_prefix(method_name)
        print(endpoint)
        self.methods[method_name] = endpoint
        self.app.add_url_rule(endpoint, view_func=fn, methods=method_types)

    def select(self, query, row_process_fn=lambda x: x):
        """Run a SQL query to select rows from table."""
        conn = self.database.connect()
        with conn.cursor() as cur:
            cur.execute(query)
            records = [row_process_fn(row) for row in cur.fetchall()]
            cur.close()
            return Response(json.dumps(records, default=json_dumps_fallback),  mimetype='application/json')

    def mutate(self, statement_fmt, args_dict):
        """Executes a SQL statement to mutate a table."""
        conn = self.database.connect()
        with conn.cursor() as cur:
            logging.error(statement_fmt, args_dict)
            cur.execute(statement_fmt, args_dict)
            conn.commit()
            cur.close()

    def _get_api_endpoint_prefix(self, method_name):
        return '/_/api/{api_name}.{method_name}'.format(api_name=self.api_name, method_name=method_name)


def json_dumps_fallback(obj):
    if isinstance(obj, Api):
        return obj.methods
    return obj.__str__()
