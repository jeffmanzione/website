import logging
import os
import psycopg2


sslmode = 'require'
if 'LOCAL_DB' in os.environ:
    sslmode = 'disable'


class Database:
    def __init__(self, database_url):
        self.database_url = database_url
        self.conn = None

    def connect(self):
        if not self.conn or self.conn.closed:
            try:
                self.conn = psycopg2.connect(
                    self.database_url, sslmode=sslmode)
            except psycopg2.DatabaseError as e:
                logging.error(e)
                raise e
            finally:
                logging.info('Connection opened successfully.')
        return self.conn
