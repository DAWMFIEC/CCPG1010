# Instructions for deploying Vecinos

## [Frontend](frontend)
* ng serve -o


## [Admin](backend/admin)
* set FLASK_APP=vecinos.py
* flask vecinos del-all #Delete migrations and database
* flask vecinos gen-db #Generates a migration and update
* flask vecinos gen-seeds #Populates database with default values
* flask run o python -m flask run

## [Api](backend/api)
* python server.py
