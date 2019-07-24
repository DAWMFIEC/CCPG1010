from flask import Flask

from config import Config

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from flask_seeder import FlaskSeeder

seeder = FlaskSeeder()
seeder.init_app(app, db)

from app import routes, models
from app import admin


from app import commands

