from app import app

from flask import render_template, redirect, url_for

@app.route('/admin')
def index():
    return render_template('index.html')