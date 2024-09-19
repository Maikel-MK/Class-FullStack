Algoritmo Ejercicio8
	Escribir "Coloque 0 para salir"
	
	Repetir
		Escribir "Indique un numero de 4 digitos"
		leer num
		
		
		si num >999 y num <10000 Entonces
			
			numText=ConvertirATexto(num)
			mil = SubCadena(numText,1,1)
			
			numText=ConvertirATexto(num)
			cen = SubCadena(numText,2,2)
			
			numText=ConvertirATexto(num)
			dec = SubCadena(numText,3,3)
			
			numText=ConvertirATexto(num)
			un = SubCadena(numText,4,4)
			
			Escribir "Tu numero tiene"
			Escribir mil " miles"
			Escribir cen " centenas"
			Escribir dec " decenas"
			Escribir un " unidades"
			
		SiNo
			si num == 0 Entonces
				Escribir "Adios"
			SiNo
				Escribir "El numero no cumple con los requisitos"				
			FinSi

			
		FinSi
	Hasta Que num = 0
	
FinAlgoritmo
