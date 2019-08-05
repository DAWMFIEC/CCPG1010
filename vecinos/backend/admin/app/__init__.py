# Imports
from flask import Flask

from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_mongoengine import MongoEngine
from flask_migrate import Migrate
from flask_seeder import FlaskSeeder

# app initialization
app = Flask(__name__)

# Configs
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

dbNoSQL = MongoEngine(app)

seeder = FlaskSeeder()
seeder.init_app(app, db)

# Models & Routes
from app import routes, models

# Modules
from app import admin
from app import commands
