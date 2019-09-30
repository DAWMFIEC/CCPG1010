import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
	
	ENV = 'development'
	DEBUG = True
	TESTING = True

	PORT= 4800

	MONGODB_DB = "vecinos"
	MONGODB_HOST = "localhost"
	MONGODB_PORT = 27017