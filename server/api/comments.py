from .api import Api

TABLE_NAME = 'Comments'

LIST_QUERY = 'SELECT * FROM {table_name};'.format(table_name=TABLE_NAME)


class CommentsApi(Api):
    def __init__(self, app, database):
        super().__init__(app, database)
        self.register_method(self.list)

    def list(self):
        return self.select(LIST_QUERY)
