Algoritmo Ejercico5
//5. Determinar el máximo de 2 valores
	
	Repetir
		Escribir "si Desea salir Ingrese 0 en Ambos Valores"
		Escribir "Ingrese los valores que desea Comparar"
		Leer a, b
		
		si a<>0 o b<>0 
			si a<0 y b<0 Entonces
				
				si abs(a)>abs(b) Entonces
					Escribir a " Es Mayor que ", b
				
					si a=b Entonces
						Escribir "Ambos valores Son Iguales"
					FinSi
				sino
				
					Escribir b " Es Mayor que ", a
				finsi
			SiNo
				si a>b Entonces
					Escribir a " Es Mayor que ", b
					
					si a=b Entonces
						Escribir "Ambos valores Son Iguales"
					FinSi
				sino
					
					Escribir b " Es Mayor que ", a
				finsi
			FinSi
		FinSi
		
		si a=0 y b=0 Entonces
			Escribir "~~~Adios~~~"
		FinSi
	
	
	Hasta Que a=0 y b=0
	
	
FinAlgoritmo