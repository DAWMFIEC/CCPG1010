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

# Called for every client connecting (after handshake)
def entrada_cliente(client, server):
	print("El cliente con id: %d se ha conectado" % client['id'])

# Called for every client disconnecting
def salida_cliente(client, server):
	print("El cliente con id: %d se ha desconectado" % client['id'])

# Called when a client sends a message
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

PORT=9001
server = WebsocketServer(PORT, host='127.0.0.1')
server.set_fn_new_client(entrada_cliente)
server.set_fn_client_left(salida_cliente)
server.set_fn_message_received(mensajeria)
server.run_forever()