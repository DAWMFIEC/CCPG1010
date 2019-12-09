#!/usr/bin/env python
# -*- coding: utf-8 -*-

#https://github.com/Pithikos/python-websocket-server
import json
import logging
from websocket_server import WebsocketServer

libros = [
	{
		"codigo":"lb001",
		"nombre":"Haciendo dibujitos en el Fin del Mundo",
		"autor":"Varios",
		"votos": 4,
		"src":"https://olcovers2.blob.core.windows.net/coverswp/2014/03/Haciendo-dibujitos-en-el-fin-del-mundo-OpenLibra.jpg"
	},
	{
		"codigo":"lb002",
		"nombre":"El Cosmonauta",
		"autor":"Nicolás Alcalá",
		"votos": 3,
		"src":"https://olcovers2.blob.core.windows.net/coverswp/2013/11/El-Cosmonauta-OpenLibra.gif"
	},
	{
		"codigo":"lb003",
		"nombre":"Música e Imágenes hasta la llegada del Cine",
		"autor":"Montserrat Armell Femenía , Antonio Ezquerro Esteban",
		"votos": 5,
		"src":"https://olcovers2.blob.core.windows.net/coverswp/2014/01/Musica-e-imagenes-hasta-la-llegada-del-cine-OpenLibra.gif"
	}
]

def entrada_cliente(client, server):
	print("El cliente con id: %d se ha conectado" % client['id'])
	json_data = json.dumps(libros)
	server.send_message_to_all(json_data)

# Llamada por cada cliente que envía un mensaje
def mensajeria(client, server, message):

	obj = json.loads(message)

	if obj['type'] == 'update':

		for libro in libros:
			if libro['codigo'] == obj['codigo']:
				libro['votos'] += 1
		
		json_data = json.dumps(libros)
		server.send_message_to_all(json_data)

PORT=9001
server = WebsocketServer(PORT, host='127.0.0.1')
server.set_fn_new_client(entrada_cliente)
server.set_fn_message_received(mensajeria)
server.run_forever()