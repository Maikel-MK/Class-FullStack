Algoritmo Ejercicio5
	Escribir "ingrese el valor de x"
	Leer x
//	Escribir "ingrese el valor de a"
	a = 9
	Escribir "ingrese el valor de y"
	Leer yy
//	Escribir "ingrese el valor de b"
	b = 5
 	Escribir "ingrese el valor de r"
	Leer r
	n = funcionMatematica2(x, yy, a, b, r)
	Escribir n
	
FinAlgoritmo

Funcion n = FuncionMatematica2(x, yy, a, b, r)
	n = (x^2 + yy^2) - (2*a*x) - ((2*b*yy) + a^2 + b^2) - r^2
FinFuncion
