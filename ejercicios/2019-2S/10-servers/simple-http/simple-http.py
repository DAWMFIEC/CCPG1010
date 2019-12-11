#!/usr/bin/python
from http.server import BaseHTTPRequestHandler,HTTPServer

PORT_NUMBER = 8000

#This class will handles any incoming request from
#the browser 
class myHandler(BaseHTTPRequestHandler):
	
	#Handler for the GET requests
	def do_GET(self):
		# print(self.request)
		self.send_response(200)
		self.send_header('Content-type','text/html')
		self.end_headers()
		# Send the html message
		self.wfile.write(bytes("<html><head><title>Title goes here.</title></head>", "utf-8"))
		self.wfile.write(bytes("<body><p>This is a test.</p>", "utf-8"))
		self.wfile.write(bytes("<p>You accessed path: %s</p>" % self.path, "utf-8"))
		self.wfile.write(bytes("</body></html>", "utf-8"))
		return

try:
	#Create a web server and define the handler to manage the
	#incoming request
	server = HTTPServer(('', PORT_NUMBER), myHandler)
	print('Started httpserver on port ' , PORT_NUMBER)
	
	#Wait forever for incoming htto requests
	server.serve_forever()

except:
	print('^C received, shutting down the web server')
	server.socket.close()