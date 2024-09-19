Algoritmo  ejercicio3
// 3. Dada una letra cualquiera indicar si es consonante,vocal o un dígito
	
Definir Letra Como Caracter
Repetir
	Escribir "-------------------"
	Escribir "Ingrese 00 Para Salir"
	Escribir "ingrese Letra "
	Leer Letra
	
		si Letra=="a" o Letra=="A" o Letra=="e" o Letra=="E" o Letra=="i" o Letra=="I" o Letra=="o" o Letra=="O" o Letra=="U" o Letra=="u" Entonces
			Escribir "La Letra Ingresada es una Vocal"
		SiNo
		
			si Letra=="0" o Letra=="1" o Letra=="2" o Letra=="3"o Letra=="4" o Letra=="5" o Letra=="6" o Letra=="7"o Letra=="8" o Letra=="9"  Entonces
				Escribir "La Letra Ingresada es un Numero"
			siNo
				
				si letra=="q" o Letra=="w" o Letra=="r" o Letra=="t" o Letra=="y" o Letra=="p" o Letra=="s" o Letra=="d" o Letra=="f" o Letra=="g" o Letra=="h" o Letra=="j" o Letra=="k" o Letra=="l" o Letra=="ñ" o Letra=="z" o Letra=="x" o Letra=="v" o Letra=="b" o Letra=="n" o Letra=="m" o letra=="c" o letra=="Q" o Letra=="W" o Letra=="R" o Letra=="T" o Letra=="Y" o Letra=="P" o Letra=="S" o Letra=="D" o Letra=="F" o Letra=="G" o Letra=="H" o Letra=="J" o Letra=="K" o Letra=="L" o Letra=="Ñ" o Letra=="Z" o Letra=="X" o Letra=="C" o Letra=="V" o Letra=="B" o Letra=="N" o letra=="M"Entonces
					Escribir "La Letra Ingresada es una Consonante"
				SiNo
					
					si letra=="´" o letra=="+" o Letra=="¨" o Letra=="*" o Letra=="{" o Letra=="}" o Letra=="[" o Letra=="]" o Letra==";" o Letra=="," o Letra=="." o Letra==":" o Letra=="-" o Letra=="_" o Letra=="<" o Letra==">" o Letra=="!" o Letra=="#" o Letra=="$" o Letra=="%" o Letra=="&" o Letra=="/" o letra=="(" o letra==")" o Letra=="=" o Letra=="?" o Letra=="¿" o Letra=="|" o Letra=="°" Entonces
						Escribir "El Texto ingresado es un signo"
					SiNo
						
						si letra=="00" Entonces
							Escribir "Nos Veremos"
						SiNo
							
							Escribir "Solo Funciona con una Letra a la Vez"
						FinSi
					FinSi					
						
				FinSi
				
			FinSi
		FinSi
	
	Hasta Que  letra=="00"


FinAlgoritmo
