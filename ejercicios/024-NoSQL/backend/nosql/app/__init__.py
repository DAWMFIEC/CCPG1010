# Imports
from flask import Flask

from config import Config

from flask_mongoengine import MongoEngine

# app initialization
app = Flask(__name__)

# Configs
app.config.from_object(Config)

dbNoSQL = MongoEngine(app)


# Models & Routes
from app import documents
from app import routes
