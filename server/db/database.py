import logging
import psycopg2


class Database:
    def __init__(self, database_url):
        self.database_url = database_url
        self.conn = None

    def connect(self):
        if not self.conn:
            try:
                self.conn = psycopg2.connect(
                    self.database_url, sslmode='require')
            except psycopg2.DatabaseError as e:
                logging.error(e)
                raise e
            finally:
                logging.info('Connection opened successfully.')
        return self.conn
