Funcion descuento  ( precio, porcentaje_descuento)
	descuento_de_precio = (precio * porcentaje_descuento) / 100
	Escribir "Te estas ahorrando"
	Escribir descuento_de_precio
	Escribir "Vas a pagar"
	Escribir  precio - descuento_de_precio
	
	Escribir "---------------------------"
	Escribir "Dame un precio o escribe salir para terminar el programa"
	leer precio_prodcuto
	Si precio_prodcuto = 'salir' Entonces
		Escribir "Adios"	
	SiNo
		Escribir "Dime cual es descuento que debo aplicar"
		leer descuento_producto
		descuento(precio_prodcuto, descuento_producto)
	FinSi
	
Fin Funcion

Algoritmo Ejercicio2
	
	Escribir "Dame un precio"
	leer precio_prodcuto
	Escribir "Dime cual es descuento que debo aplicar"
	leer descuento_producto
	descuento(precio_prodcuto, descuento_producto)
//	Mientras Verdadero Hacer
//		Escribir "Dame un precio"
//		Leer precio
//		descuento_de_precio = (precio * 0.25)
//		Escribir "Te estas ahorrando"
//		Escribir descuento_de_precio
//		Escribir "Vas a pagar"
//		Escribir  precio - descuento_de_precio
//	FinMientras
FinAlgoritmo
