import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
	
	MONGODB_DB = "vecinos"
	MONGODB_HOST = "localhost"
	MONGODB_PORT = 27017

