Algoritmo Ejercicio2	
// 2. Solicitar un valor entero que representa un a�o e indicar si se trata de un a�o bisiesto
Definir a�o Como Entero
	
Repetir
	Escribir "-----------------------------"
	Escribir "Para Salir Introduzca 0"
	Escribir "Introduzca el A�o a Calcular"
	Leer a�o
	
		
	si a�o%4<>0 y a�o%100<>0 Entonces
		Escribir a�o, " -No es Bisiesto- "
	SiNo
		si a�o=0 Entonces
			Escribir "--- Vuelva pronto ---"
		SiNo
			Escribir a�o, " -Es Bisiesto- "
		FinSi
	FinSi
	
	
Hasta Que a�o=0

FinAlgoritmo

