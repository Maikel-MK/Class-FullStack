Algoritmo Ejercicio4
	// 4. Determinar si un dígito es par o 
	
	Definir dt como entero
	
	Repetir
		Escribir "----------------------------------------------------"
		Escribir "Ingrese El Digito a Determinar o Ingrese 0 para Salir"
		Leer dt
		
		si dt<>0 Entonces
			
			si dt%2<>0 Entonces
				Escribir "El Digito es Impar"
			SiNo
				
				Escribir "El Digito es Par"
			FinSi
		FinSi
	
	si dt==0 Entonces
		Escribir "Vuelva Pronto y por las dudas ... 0 es Par"
	FinSi
	
Hasta Que dt==0

FinAlgoritmo
