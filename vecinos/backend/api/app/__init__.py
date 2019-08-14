import connexion

from config import Config
from flask_mongoengine import MongoEngine

from flask_cors import CORS

# Create the application instance
conn = connexion.App(__name__)
CORS(conn.app, methods=['GET'], allow_headers=['Content-Type'])

# Configs
conn.app.config.from_object(Config)

dbNoSQL = MongoEngine(conn.app)

import routes

conn.add_api('swagger/api.yml')

# Get the underlying Flask app instance
app = conn.app

# if __name__ == "__main__":
# 	conn.run(host='127.0.0.1', port=4800, debug=True)


