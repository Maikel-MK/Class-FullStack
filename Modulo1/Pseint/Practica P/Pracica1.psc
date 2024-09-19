//Crea algoritmos que resuelvan los siguientes problemas:


//	9. Indicar si un alumno aprobó o no una materia conformada por 2 parciales (que representan el 50% de la definitiva), 2
//		quices (30% de la definitiva) y 2 proyectos (el primero 10% y el segundo 20%). En el caso de que su definitiva sea
//		mayor o igual a 9 pero menor a 9,5, indicarle que debe asistir a actividades de recuperación. Si la nota es menor a 9 el
//			alumno está reprobado.









//	IMPORTANTE: recuerda incluir todas las validaciones que consideras necesarias sobre los datos de entrada y siempre mostrar los resultados del algoritmo




//Algoritmo Ejercicio1
// 1. Para un valor entero positivo 
//Seg que representa una cantidad en segundos, 
//indicar su equivalente en minutos, horas y días


//	Definir s,m,h Como Real
//	Leer s
//	
//	si s>=0 Entonces
//		m= s/60
//		FinSi
//		si m>0 Entonces
//			h= m/60
//		FinSi
//
//	
//	escribir "seg:",s ," min:",m, " hora;", h
//	
//FinAlgoritmo

//Algoritmo Ejercicio2
//	
//	// 2. Solicitar un valor entero que representa un año 
//	//e indicar si se trata de un año bisiesto
//	
//	definir año Como Entero
//	
//	
//	Repetir
//		
//	Escribir "Introduzca el Año a Calcular"
//	Leer año
//	
//		
//	si año%4<>0 y año%100<>0 Entonces
//		Escribir año, " no es Bisiesto"
//	SiNo
//		si año=0 Entonces
//			Escribir " Vuelva pronto"
//		SiNo
//			Escribir año, " Es Bisiesto"
//		FinSi
//	FinSi
//	
//	
//  Hasta Que año=0
//
//	
//FinAlgoritmo

//Algoritmo  ejercicio3
//	// 3. Dada una letra cualquiera indicar si es consonante, 
//	//vocal o un dígito
//	Definir Letra Como Caracter
//	Repetir
//		
//		Escribir "ingrese Letra  o escriba 00"
//	Leer Letra
//	
//	si Letra=="a" o Letra=="A" o Letra=="e" o Letra=="E" o Letra=="i" o Letra=="I" o Letra=="o" o Letra=="O" o Letra=="U" o Letra=="u" Entonces
//		
//		Escribir "La Letra Ingresada es una Vocal"
//		
//	SiNo
//		
//		si Letra=="0" o Letra=="1" o Letra=="2" o Letra=="3"o Letra=="4" o Letra=="5" o Letra=="6" o Letra=="7"o Letra=="8" o Letra=="9"  Entonces
//			
//			Escribir "La Letra Ingresada es un Numero"
//			
//			SiNo
//				si letra=="q" o Letra=="w" o Letra=="r" o Letra=="t" o Letra=="y" o Letra=="p" o Letra=="s" o Letra=="d" o Letra=="f" o Letra=="g" o Letra=="h" o Letra=="j" o Letra=="k" o Letra=="l" o Letra=="ñ" o Letra=="z" o Letra=="x" o Letra=="v" o Letra=="b" o Letra=="n" o Letra=="m" o letra=="c" o letra=="Q" o Letra=="W" o Letra=="R" o Letra=="T" o Letra=="Y" o Letra=="P" o Letra=="S" o Letra=="D" o Letra=="F" o Letra=="G" o Letra=="H" o Letra=="J" o Letra=="K" o Letra=="L" o Letra=="Ñ" o Letra=="Z" o Letra=="X" o Letra=="C" o Letra=="V" o Letra=="B" o Letra=="N" o letra=="M"Entonces
//					
//					Escribir "La Letra Ingresada es una Consonante"
//					
//				SiNo
//					si letra=="´" o letra=="+" o Letra=="¨" o Letra=="*" o Letra=="{" o Letra=="}" o Letra=="[" o Letra=="]" o Letra==";" o Letra=="," o Letra=="." o Letra==":" o Letra=="-" o Letra=="_" o Letra=="<" o Letra==">" o Letra=="!" o Letra=="#" o Letra=="$" o Letra=="%" o Letra=="&" o Letra=="/" o letra=="(" o letra==")" o Letra=="=" o Letra=="?" o Letra=="¿" o Letra=="|" o Letra=="°" Entonces
//						
//						Escribir "El Texto ingresado es un signo"
//						
//					SiNo
//						si letra=="00" Entonces
//							
//							Escribir "Nos Veremos"
//						SiNo
//							
//							Escribir "Solo Funciona con una Letra a la Vez"
//						FinSi
//					FinSi					
//					
//				FinSi
//				
//		FinSi
//	FinSi
//	
//Hasta Que  letra=="00"
//
//FinAlgoritmo

//Algoritmo Ejercicio4
// 	Definir dt como entero
//	// 4. Determinar si un dígito es par o 
//	Repetir
//		
//	Escribir "Ingrese El digito a determinar o Ingrese 0 para Salir"
//	Leer dt
//	si dt<>0 Entonces
//		si dt%2<>0 Entonces
//			Escribir "El Digito Ingresado es Impar"
//		SiNo
//			Escribir "El Digito es Par"
//		FinSi
//	finsi
//	
//	si dt==0 Entonces
//		Escribir "Vuelva Pronto y por las dudas ... 0 es Par"
//	FinSi
//Hasta Que dt==0
//	
//FinAlgoritmo

//Algoritmo Ejercico5
//	
//	//5. Determinar el máximo de 2 valores
//	Repetir
//		
//		Escribir "Ingrese los valores que desea Comparar"
//		Escribir "si Desea salir ingrese 0 en Ambos Valores"
//		Leer a, b
//	
//		
//	si a<>0 o b<>0 
//		si a>b Entonces
//
//		Escribir a " Es Mayor que ", b
//				si a=b Entonces
//					Escribir "Ambos valores Son Iguales"
//				FinSi
//
//		sino
//		
//			Escribir b " Es Mayor que ", a
//	
//		finsi
//	FinSi
//		si a=0 y b=0 Entonces
//			Escribir "Adios"
//		FinSi
//
//	
//Hasta Que a=0 y b=0
//	
//	
//FinAlgoritmo


//Algoritmo Ejercicio6
//	//	6. Calcular el valor absoluto de un número N
//	
//
//	Repetir
//		
//		Escribir "Introduzca el numero para Calcular el Numero Absoluto"
//		Leer nn
//		
//		si nn>0 Entonces
//			
//			Escribir "El Numero Absoluto Es: ",nn
//			
//			
//		SiNo
//			si nn<0 Entonces
//				nn= (-nn*2)/2
//				
//				Escribir "El Numero Absoluto Es: ",nn
//				
//			FinSi
//		FinSi
//		
//		si nn=0 Entonces
//			Escribir "El Valor absoluto Es: ", nn " Vuelva Pronto"
//		FinSi
//		
//	Hasta Que nn=0
//FinAlgoritmo

//Algoritmo Ejercicio7
//	// 7. Determinar el signo de la suma de dos números, sin calcularla
//	Repetir
//		Escribir "---------------------------------"
//		Escribir ""
//		Escribir "Ingrese Los Números a Sumar"
//		Leer A, B
//		
//		si A>0 y B>0 Entonces
//			
//			Escribir "El Signo de La suma de Ambos Números Seria Positivo"
//		SiNo
//			Si A<0 y B<0 Entonces
//				
//				Escribir "El Signo de La suma de Ambos Números Seria Negativo"
//			SiNo
//				
//				
//				si A<0 y B>0 Entonces
//					si abs(A)<B Entonces
//						Escribir "El Signo de La suma de Ambos Números Seria Positivo"
//					SiNo
//						si abs(A)>B Entonces
//							Escribir "El Signo de La suma de Ambos Números Seria Negativo"
//							
//						FinSi
//					FinSi
//					
//				SiNo
//					
//					Si A>0 y B<0 Entonces
//						si A<abs(B) Entonces
//							Escribir "El Signo de La suma de Ambos Números Seria Negativo"
//						SiNo
//							si A>abs(B) Entonces
//								Escribir "El Signo de La suma de Ambos Números Seria Positivo"
//								
//							FinSi
//						FinSi
//					FinSi
//				FinSi
//				
//			FinSi
//		FinSi
//		si A+B=0 o A-B=0 Entonces
//			Escribir "El Signo de la Suma es Positivo"
//		FinSi
//		Si A=0 y B=0 Entonces		
//			Escribir " Vuelva Pronto"
//		SiNo
//			
//			si A=0 y B>0 o B=0 y A>0 Entonces
//				Escribir "El Signo de la Suma Es Positivo"
//			SiNo
//				Si A=0 y B<0 o B=0 y A<0 Entonces
//					Escribir "El Signo de la Suma Es Negativo"
//				FinSi
//			FinSi
//		FinSi
//	Hasta Que A=0 y B=0
//	
//FinAlgoritmo



//Algoritmo Ejercicio9
//	
//	
//	//	9. Indicar si un alumno aprobó o no una materia conformada por 2 parciales (que representan el 50% de la definitiva), 2
////		quices (30% de la definitiva) y 2 proyectos (el primero 10% y el segundo 20%). En el caso de que su definitiva sea
////		mayor o igual a 9 pero menor a 9,5, indicarle que debe asistir a actividades de recuperación. Si la nota es menor a 9 el
////			alumno está reprobado.
//	Repetir
//	Escribir "-------------------------"
//	Escribir "Si desea salir Ingrese 0 en todas las Notas"
//	Escribir "-------------------------"
//	Escribir "Notas de los Parciales"
//	Leer P1, P2
//	Escribir "-------------------------"
//	Escribir "Notas de los Qüices"
//	Leer Q1, Q2
//	Escribir "-------------------------"
//	Escribir "Notas de los Proyectos"
//	Leer Y1, Y2
//	Escribir "-------------------------"
//	
//	si P1<=2.5 y P2<=2.5 y Q1<=1.5 y Q2<=1.5 y Y1<=1 y Y2<=2 Entonces
//		
//	Si P1+P2+Q1+Q2+Y1+Y2>0 Entonces
//		si P1+P2+Q1+Q2+Y1+Y2>9.5 Entonces
//			Escribir "Felicidades Aprovado con una nota de: ",P1+P2+Q1+Q2+Y1+Y2," Puntos"
//		SiNo
//			si P1+P2+Q1+Q2+Y1+Y2>=9 y P1+P2+Q1+Q2+Y1+Y2<= 9.5 Entonces
//				Escribir "Debe asistir a Actividades de Recuperacion su Nota es de:",P1+P2+Q1+Q2+Y1+Y2 " Puntos"
//				
//			SiNo
//				si P1+P2+Q1+Q2+Y1+Y2<9 y P1+P2+Q1+Q2+Y1+Y2>0 Entonces
//					Escribir "Mejor Intento para la Proxima Reprovo con una nota de: ",P1+P2+Q1+Q2+Y1+Y2," Puntos"
//					
//				FinSi
//			FinSi
//		FinSi
//	FinSi
//	FinSi
//
//	
//	si P1+P2+Q1+Q2+Y1+Y2<0 o P1+P2+Q1+Q2+Y1+Y2>11 o P1>2.5 o P2>2.5 o Q1>1.5 o Q2>1.5 o Y1>1 o Y2>2 Entonces
//		Escribir "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
//		Escribir "Ingreso Alguna nota mal, Revise su error"
//		Escribir "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
//	FinSi
//	si P1+P2+Q1+Q2+Y1+Y2=0 Entonces
//		Escribir "Vuelva Pronto"
//	FinSi
//	
//Hasta Que P1+P2+Q1+Q2+Y1+Y2=0
//	
//FinAlgoritmo

//Algoritmo Ejercicio8	
//	//8. Solicitar un número entero de 4 dígitos significativo y descomponerlo para mostrar unidades de mil, centenas, decenas y
//	unidades
//Escribir "Ingrese Numero a Descomponer"
//	Leer E,A,C,D
//	
//	Si E>=0 y A>=0 y C>=0 y D>=0 y A<=9 y C<=9 y D<=9 y E<=9 Entonces
//		
//		E=E*1000
//		A=A*100
//		C=C*10
//		D=D*1
//		Escribir "| " E," Milesimas | ",A," Centecimas | ",C," Decenas | ",D," Unidades |"
//		
//		
//	SiNo
//		si E<=0 o A<=0 o C<=0 o D<=0 o A>=9 o C>=9 o D>=9 o E>=9 Entonces
//			Escribir "Numero Ingresado No Permitido"
//		FinSi
//		Si E=0 y A=0 y C=0 y D=0 Entonces
//			Escribir "Nos Contamos Luego"
//		FinSi
//	FinSi
//	FinAlgoritmo


Algoritmo a
	
	//8. Solicitar un número entero de 4 dígitos significativo y descomponerlo para mostrar unidades de mil, centenas, decenas y
//	unidades
	Repetir
	Escribir "Ingrece Cifra a Descomponer de 4 Digitos"
	Leer numero
	
	si numero >999 y numero<10000 Entonces
		Dimension nu[10], nd[10], nc[10], nm[10] 
		nu[1]<-'0'; nu[2]<-'1'; nu[3]<-'2'; nu[4]<-'3'; nu[5]<-'4'; nu[6]<-'5'; nu[7]<-'6'; nu[8]<-'7'; nu[9]<-'8'; nu[10]<-'9'
		nd[1]<-'00'; nd[2]<-'10'; nd[3]<-'20'; nd[4]<-'30'; nd[5]<-'40'; nd[6]<-'50'; nd[7]<-'60'; nd[8]<-'70'; nd[9]<-'80'; nd[10]<-'90'
		nc[1]<-'000'; nc[2]<-'100'; nc[3]<-'200'; nc[4]<-'300'; nc[5]<-'4000'; nc[6]<-'500'; nc[7]<-'600'; nc[8]<-'700'; nc[9]<-'800'; nc[10]<-'900'
		nm[1]<-'0000'; nm[2]<-'1000'; nm[3]<-'2000'; nm[4]<-'3000'; nm[5]<-'40000'; nm[6]<-'5000'; nm[7]<-'6000'; nm[8]<-'7000'; nm[9]<-'8000'; nm[10]<-'9000'
		milecimas<-trunc(numero/1000) MOD 10
		centenas<-trunc(Numero/100) MOD 10
		decenas<-trunc(Numero/10) MOD 10
		unidades<-Numero MOD 10
		Escribir nm[milecimas+1], " Milesimas"
		Escribir nc[centenas+1], " Centesimas" 
		Escribir nd[decenas+1], " Decenas"
		Escribir nu[unidades+1], " Unidades"
	SiNo

		si numero<0 o numero<=999 o numero>=10000 Entonces
			Escribir "-------------------------------"
			Escribir "La Cifra Ingresada No es Valida"
			Escribir "-------------------------------"
		FinSi
	FinSi
	

FinAlgoritmo








