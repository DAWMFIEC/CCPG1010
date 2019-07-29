from flask import render_template, redirect, url_for, jsonify

from app import app
from app.documents import Anuncio


@app.route('/', methods=['GET'])
def getAll():
	anuncios = Anuncio.objects
	return jsonify(anuncios)


@app.route('/<barrio>', methods=['GET'])
def getByBarrio(barrio):
	anuncios = Anuncio.objects(barrio__contains=barrio)
	return jsonify(anuncios)
