import ablib
import time


def allarme():
	RL0.on()	
	print "Allarme"
	time.sleep(1)
	RL0.off()	

porta_principale = ablib.Daisy8(connector='D11',id='IN0',position='first')
porta_principale.set_edge("closing",allarme)

RL0 = ablib.Daisy8(connector='D11',id='RL0')
 
while True: 
	print "Ciao"
	time.sleep(1)
