#!/usr/bin/python
import tornado.httpserver
import tornado.ioloop
import tornado.web
import tornado.websocket
import tornado.gen
import ablib
from tornado.options import define, options
from random import randint

clients = []
 
class WebSocketHandler(tornado.websocket.WebSocketHandler):

	def open(self):
		print "Websocket connection"
		clients.append(self)

	def on_message(self, message):
		print "tornado received from client: %s" % message
		#self.write_message(message)
		for c in clients:
			c.write_message(message)

	def on_close(self):
		print 'Websocket closed'
		clients.remove(self)		

def main():
	
	application = tornado.web.Application([
		(r"/websocket", WebSocketHandler),
		(r"/(.*)", tornado.web.StaticFileHandler, {"path": ".","default_filename": "index.html"}),
	])
	application.listen(8080)
 

	mainLoop = tornado.ioloop.IOLoop.instance()
	#scheduler = tornado.ioloop.PeriodicCallback(sendSlide,1000,io_loop=mainLoop)
	#scheduler.start()
	mainLoop.start()
	
if __name__ == "__main__":
	main()
