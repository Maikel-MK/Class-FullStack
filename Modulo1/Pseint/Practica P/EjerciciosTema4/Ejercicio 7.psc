Algoritmo Ejercicio7
	// 7. Determinar el signo de la suma de dos números, sin calcularla
	Repetir
		Escribir "---------------------------------"
		Escribir "Ingrese Los Números a Sumar"
		Leer A, B
		
		si A>0 y B>0 Entonces
			Escribir "El Signo de La suma de Ambos Números Seria Positivo"
		SiNo
			
			Si A<0 y B<0 Entonces
				Escribir "El Signo de La suma de Ambos Números Seria Negativo"
			SiNo
				
				si A<0 y B>0 Entonces
					
					si abs(A)<B Entonces
						Escribir "El Signo de La suma de Ambos Números Seria Positivo"
					SiNo
						
						si abs(A)>B Entonces
							Escribir "El Signo de La suma de Ambos Números Seria Negativo"
						FinSi
					FinSi
				SiNo
					
					Si A>0 y B<0 Entonces
						si A<abs(B) Entonces
							Escribir "El Signo de La suma de Ambos Números Seria Negativo"
						SiNo
							si A>abs(B) Entonces
								Escribir "El Signo de La suma de Ambos Números Seria Positivo"
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
