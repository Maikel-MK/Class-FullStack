Algoritmo Ejercicio7
	Definir num1 Como Entero
	Definir num2 Como Entero
	Definir suma Como Caracter
	
	Escribir "Introduzca el primer entero"
	Leer num1
	Escribir "Introduzca el segundo entero"
	Leer num2
	
	Si num1 > 0 y num2 > 0 Entonces
		suma = "positivo"
	SiNo
		Si num1 < 0 y num2 < 0 Entonces
			suma = "negativo"
			
		SiNo

			Si (num1 > 0 y num1 > abs(num2)) o (num2 > 0 y num2 > abs(num1)) Entonces
				suma = "positivo"
			SiNo
				suma = "negativo"
			FinSi
		FinSi
	FinSi
	
	Escribir "El signo de la suma es ", suma
	
FinAlgoritmo
