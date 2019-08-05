from flask_seeder import Seeder

from app import db, app, admin
from app.models import User, Role
from app.admin import user_datastore
from flask_security.utils import encrypt_password

class RoleSeeder(Seeder):

	def run(self):
		
		super_user_role = db.session.query(Role).filter_by(name=u'superuser').first()
		user_role = db.session.query(Role).filter_by(name=u'user').first()
		
		if super_user_role is None and user_role is None:
			
			user_role = Role(name=u'user')
			super_user_role = Role(name=u'superuser')
			
			db.session.add(user_role)
			db.session.add(super_user_role)
			db.session.commit()

			print("Saved superuser & user roles")

		else:
			print("Already saved")