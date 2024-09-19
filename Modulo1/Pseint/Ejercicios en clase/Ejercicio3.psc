Funcion CalculadoraDeTiempo(tiempo_en_segundos)
	minutos = tiempo_en_segundos / 60
	horas = minutos / 60
	Escribir "El tiempo que nos proporciono equivale a ", minutos, " minutos"
	Escribir "El tiempo que nos proporciono equivale a ", horas, " horas"
	Escribir "Gracias, regrese pronto"
	
FinFuncion
	
Algoritmo Ejercicio3
	Leer seg
	CalculadoraDeTiempo(seg)
	
FinAlgoritmo
