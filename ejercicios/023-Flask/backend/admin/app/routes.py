from app import app

from flask import render_template, redirect, url_for

@app.route('/')
@app.route('/admin')
def index():
    return redirect(url_for('admin.index'))