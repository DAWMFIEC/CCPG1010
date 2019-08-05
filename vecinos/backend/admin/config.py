import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
	SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'

	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
	'sqlite:///' + os.path.join(basedir, 'vecinos.db')
	SQLALCHEMY_TRACK_MODIFICATIONS = False

	# Flask-Security config
	SECURITY_URL_PREFIX = "/admin"
	SECURITY_PASSWORD_HASH = "pbkdf2_sha512"
	SECURITY_PASSWORD_SALT = "ATGUOHAELKiubahiughaerGOJAEGj"

	# Flask-Security URLs, overridden because they don't put a / at the end
	SECURITY_LOGIN_URL = "/login/"
	SECURITY_LOGOUT_URL = "/logout/"
	SECURITY_REGISTER_URL = "/register/"

	SECURITY_POST_LOGIN_VIEW = "/admin/"
	SECURITY_POST_LOGOUT_VIEW = "/admin/"
	SECURITY_POST_REGISTER_VIEW = "/admin/"

	# Flask-Security features
	SECURITY_REGISTERABLE = True
	SECURITY_SEND_REGISTER_EMAIL = False
	SQLALCHEMY_TRACK_MODIFICATIONS = False


	MONGODB_DB = "vecinos"
	MONGODB_HOST = "localhost"
	MONGODB_PORT = 27017

	# MONGODB_DB = "vecinos"
	# MONGODB_HOST = "ds255857.mlab.com"
	# MONGODB_PORT = 55857
	# MONGODB_USERNAME = "admin"
	# MONGODB_PASSWORD = "adminadmin1"