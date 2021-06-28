import json
import logging
from flask import Response, request
from .api import Api

TABLE_NAME = 'Comments'

LIST_QUERY = 'SELECT * FROM {table_name};'.format(table_name=TABLE_NAME)
INSERT_QUERY_FMT = 'INSERT INTO Comments (username, message, created_on) VALUES ' + \
    '(%(username)s, %(message)s, CURRENT_TIMESTAMP);'


class CommentsApi(Api):
    def __init__(self, app, database):
        super().__init__(app, database)
        self.register_method(self._list_comments, 'list')
        self.register_method(self._insert_comment, method_types=['POST'])

    def _list_comments(self):
        return self.select(LIST_QUERY)

    def _insert_comment(self):
        data = request.get_json()
        if not _valid_insert(data):
            return Response('BAD', status=400)
        self.mutate(INSERT_QUERY_FMT, data)
        return Response('OK', status=200)


def _valid_insert(data):
    if not 'username' in data:
        logging.error('insert requires username.')
        return False
    if not 'message' in data:
        logging.error('insert requires message.')
        return False
    return True
