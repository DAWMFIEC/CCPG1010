from app import conn 
from flask import render_template, redirect, url_for

# Create a URL route in our application for "/"
@conn.route('/')
def home():
    return redirect('/api/ui')