Algoritmo Ejercicio2	
// 2. Solicitar un valor entero que representa un año e indicar si se trata de un año bisiesto
Definir año Como Entero
	
Repetir
	Escribir "-----------------------------"
	Escribir "Para Salir Introduzca 0"
	Escribir "Introduzca el Año a Calcular"
	Leer año
	
		
	si año%4<>0 y año%100<>0 Entonces
		Escribir año, " -No es Bisiesto- "
	SiNo
		si año=0 Entonces
			Escribir "--- Vuelva pronto ---"
		SiNo
			Escribir año, " -Es Bisiesto- "
		FinSi
	FinSi
	
	
Hasta Que año=0

FinAlgoritmo

