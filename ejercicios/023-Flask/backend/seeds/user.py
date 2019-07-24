from flask_seeder import Seeder

from app import db, app, admin
from app.models import User, Role
from app.admin import user_datastore
from flask_security.utils import encrypt_password

class UserSeeder(Seeder):

	def run(self):
		
		super_user_role = db.session.query(Role).filter_by(name=u'superuser').first()
		user_role = db.session.query(Role).filter_by(name=u'user').first()

		if super_user_role is not None and user_role is not None:
			
			user_datastore.create_user(
					first_name='Super Admin',
					email='sadmin',
					last_name='All',
					password=encrypt_password('sadmin'),
					roles=[user_role, super_user_role]
			)
			
			user_datastore.create_user(
					first_name='Admin',
					email='admin',
					last_name='Vecinos',
					password=encrypt_password('admin'),
					roles=[user_role,]
			)
			
			db.session.commit()

			print("Seeded Admin & DefaultUser")

		else:
			print("Already saved")

