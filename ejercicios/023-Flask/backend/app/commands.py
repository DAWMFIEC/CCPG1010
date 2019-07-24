from app import app
import click
import os

@app.cli.command("vecinos")
@click.argument("arg")
def generate(arg):
	"""
	Commands related to vecinos database tasks.				\n
		gen-db 		Generates a migration and update	\n	
		gen-seeds 	Populates database with default values\n
		del-all 	Delete migrations and database
	"""
	if arg == "gen-db":
		os.system('flask db init')
		os.system('flask db migrate -m "tables"')
		os.system('flask db upgrade')
	elif arg == "gen-seeds":
		os.system("flask seed run")
	elif arg == "del-all":
		os.system("rmdir migrations /Q /S")
		os.system("del /f *.db")