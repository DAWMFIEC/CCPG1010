from connexion import NoContent

from server import conn 
from server import dbNoSQL
from documents import Anuncio

def read():
    return [
    {
	    "titulo_anuncio":anuncio.titulo_anuncio,
	    "texto_anuncio":anuncio.texto_anuncio,
	    "familia":anuncio.familia,
	    "barrio":anuncio.barrio,
	    "fecha":anuncio.fecha
    } for anuncio in Anuncio.objects]