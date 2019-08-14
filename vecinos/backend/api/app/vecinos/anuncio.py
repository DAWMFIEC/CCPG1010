from connexion import NoContent

from app import conn 
from app import dbNoSQL
from app.documents import Anuncio

def read():
    return [
    {
	    "titulo_anuncio":anuncio.titulo_anuncio,
	    "texto_anuncio":anuncio.texto_anuncio,
	    "familia":anuncio.familia,
	    "barrio":anuncio.barrio,
	    "fecha":anuncio.fecha
    } for anuncio in Anuncio.objects]