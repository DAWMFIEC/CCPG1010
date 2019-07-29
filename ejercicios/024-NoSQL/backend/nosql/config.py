import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
	
	#MONGODB_DB = "vecinos"
	#MONGODB_HOST = "localhost"
	#MONGODB_PORT = 27017

	MONGODB_DB = "vecinos"
	MONGODB_HOST = "ds255857.mlab.com"
	MONGODB_PORT = 55857
	MONGODB_USERNAME = "admin"
	MONGODB_PASSWORD = "adminadmin1"
