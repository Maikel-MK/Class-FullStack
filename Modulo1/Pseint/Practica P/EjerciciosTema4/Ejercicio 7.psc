Algoritmo Ejercicio7
	// 7. Determinar el signo de la suma de dos n�meros, sin calcularla
	Repetir
		Escribir "---------------------------------"
		Escribir "Ingrese Los N�meros a Sumar"
		Leer A, B
		
		si A>0 y B>0 Entonces
			Escribir "El Signo de La suma de Ambos N�meros Seria Positivo"
		SiNo
			
			Si A<0 y B<0 Entonces
				Escribir "El Signo de La suma de Ambos N�meros Seria Negativo"
			SiNo
				
				si A<0 y B>0 Entonces
					
					si abs(A)<B Entonces
						Escribir "El Signo de La suma de Ambos N�meros Seria Positivo"
					SiNo
						
						si abs(A)>B Entonces
							Escribir "El Signo de La suma de Ambos N�meros Seria Negativo"
						FinSi
					FinSi
				SiNo
					
					Si A>0 y B<0 Entonces
						si A<abs(B) Entonces
							Escribir "El Signo de La suma de Ambos N�meros Seria Negativo"
						SiNo
							si A>abs(B) Entonces
								Escribir "El Signo de La suma de Ambos N�meros Seria Positivo"
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
		

		Si A=0 y B=0 Entonces				
			Escribir " Vuelva Pronto  ---  Por Cierto Es Positivo..."
		SiNo
			
			si A=0 y B>0 o B=0 y A>0 Entonces
				Escribir "El Signo de la Suma Es Positivo"
			SiNo
				
				Si A=0 y B<0 o B=0 y A<0 Entonces
					Escribir "El Signo de la Suma Es Negativo"
				FinSi
			FinSi
		FinSi
	Hasta Que A=0 y B=0
	
FinAlgoritmo
