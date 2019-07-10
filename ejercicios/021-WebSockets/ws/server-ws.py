#!/usr/bin/env python
# -*- coding: utf-8 -*-

#https://github.com/Pithikos/python-websocket-server
import json
import logging
from websocket_server import WebsocketServer

clasificados = [
	{
		'id':2381,
		'titulo':'Mecánico',
		'texto':'Servicio mecánico y electromecánico a la casa. La Saiba. Llamar al 094932921.'
	}
]

# Llamada por cada cliente que se conecta (después del handshake)
def entrada_cliente(client, server):
	print("El cliente con id: %d se ha conectado" % client['id'])

# Llamada por cada cliente que se desconecta
def salida_cliente(client, server):
	print("El cliente con id: %d se ha desconectado" % client['id'])

# Llamada por cada cliente que envía un mensaje
def mensajeria(client, server, message):

	obj = json.loads(message)

	if obj['type'] == 'connect':

		json_data = json.dumps(clasificados)
		server.send_message_to_all(json_data)

	if obj['type'] == 'update':

		id = clasificados[-1]["id"] + 1

		clasificados.append({
			'id':id,
			'titulo':obj['titulo'],
			'texto':obj['texto']
		})

		print("Clasificado agregado")
		for clasificado in clasificados:
			print(clasificado['id'])
			print("\t"+clasificado['titulo'])
			print("\t"+clasificado['texto'])

		json_data = json.dumps(clasificados)
		server.send_message_to_all(json_data)

#Configuración del servidor de web sockets

PORT=9001
server = WebsocketServer(PORT, host='127.0.0.1')
server.set_fn_new_client(entrada_cliente)
server.set_fn_client_left(salida_cliente)
server.set_fn_message_received(mensajeria)
server.run_forever()