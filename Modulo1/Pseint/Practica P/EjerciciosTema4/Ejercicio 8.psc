Algoritmo Ejercicio8	
	//8. Solicitar un número entero de 4 dígitos significativo y descomponerlo para mostrar unidades de mil, centenas, decenas y unidades
	// Consegui Hacerlo de esta otra forma pero ... nose
	
//	Escribir "Ingrese Numero a Descomponer"
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
//		
//	FinSi
//
			
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

