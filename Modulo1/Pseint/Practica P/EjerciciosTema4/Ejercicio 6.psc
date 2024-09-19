Algoritmo Ejercicio6
//	6. Calcular el valor absoluto de un número N
	
	Repetir
	
	Escribir "Introduzca el numero para Calcular el Numero Absoluto"
	Leer nn
		
		si nn>0 Entonces			
			Escribir "El Numero Absoluto Es: ",nn
		SiNo
			
			si nn<0 Entonces
				nn= abs(nn)
					Escribir "El Numero Absoluto Es: ",nn
			FinSi
		FinSi
		
		si nn=0 Entonces
			Escribir "El Valor absoluto Es: ", nn " ~~~Vuelva Pronto~~~"
		FinSi
		
	Hasta Que nn=0
FinAlgoritmo
