import json
import logging
from flask import Response, request
from .api import Api

TABLE_NAME = 'ElectionPredictions'
LIST_QUERY = 'SELECT * FROM {table_name};'.format(table_name=TABLE_NAME)


class ElectionsApi(Api):
    def __init__(self, app, database):
        super().__init__(app, database)
        self.register_method(self._list_election_predictions, 'list')

    def _list_election_predictions(self):
        return self.select(LIST_QUERY)
