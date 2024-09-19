Funcion  Retorno
	Menu(1,2,3, S,Ret, Ret_r,v)	
Fin Funcion

Funcion Menu (1,2,3, S,Ret, Ret_r,v)
	Escribir 'Que Operacion Desea Realizar:'
	Escribir " Retiro    (1)"
	Escribir " Consulta  (2)"
	Escribir " Salir     (3)"
	Leer op
	
	si op==1 Entonces
		Retiros(Ret_r,Ret,S)
		
		SiNo
			
		Si op==2 Entonces
			Escribir 'Su Saldo Restante son ', S " BS"
			Escribir "Volver (1) o Salir (2)"
			Leer v
			si v=1 Entonces
				Retorno//buscar manera que devuelva al Menu
				
			SiNo
				si v=2 Entonces
					Escribir "Retire Su Tarjeta"
				SiNo
					Escribir "Operacion Invalida"
					Retorno
				FinSi
			FinSi
		sino 
			
			si op=3
				Escribir "Retire su Tarjeta"
			SiNo
				Escribir "Operacion Invalida"
				Retorno
			FinSi
		FinSi
	FinSi
	
Fin Funcion

Funcion Retiros (Ret,Ret_r,S)
	
	Escribir "Que Operacion Desea Realizar"
	Escribir " Retiro Rapido    (1)"
	Escribir " Retiro           (2)"
	Escribir " Salir            (3)"
	Leer Ret_r
	si s>20 y Ret_r=1 Entonces
			Escribir 'Cuanto Desea Retirar?'
			Escribir '   1. 20'
			Escribir '   2. 50'
			Escribir '   3. 100'
			Escribir '   4. 200'
			Escribir '   5. 500'
			Escribir '   6. Salir'
			Leer Ret
			
			Según Ret Hacer
			1:
				Escribir 'Ha Retirado 20 BS'
				S = S-20
				Retorno
			2:
				Escribir 'Ha Retirado 50 BS'
				S = S-50
				Retorno
			3:
				Escribir 'Ha Retirado 100 BS'
				S = S-100
				Retorno
			4:
				Escribir 'Ha Retirado 200 BS'
				S = S-200
				Retorno
			5:
				Escribir 'Ha Retirado 500 BS'
				S = S-500
				Retorno
			6:
				Escribir "Retire su Tarjeta"
			De Otro Modo:
				Escribir 'Opcion Invalida'
				Retorno
		FinSegún
	SiNo
		si S>1000 y Ret_r=2 Entonces
			Escribir 'Cuanto Desea Retirar?'
			Escribir '   1. 1000'
			Escribir '   2. 1500'
			Escribir '   3. 2000'
			Escribir '   4. 2500'
			Escribir '   5. 5000'
			Escribir '   6. Salir'
			Leer Ret
			
			Según Ret Hacer
		1:
			Escribir 'Ha Retirado 1000 BS'
			S =S-1000
			Retorno
		2:
			Escribir 'Ha Retirado 1500 BS'
			S = S-1500
			Retorno
		3:
			Escribir 'Ha Retirado 2000 BS'
			S = S-2000
			Retorno
		4:
			Escribir 'Ha Retirado 2500 BS'
			S = S-2500
			Retorno
		5:
			Escribir 'Ha Retirado 5000 BS'
			S = S-5000
			Retorno
		6:
			Escribir "Retire su Tarjeta"
		De Otro Modo:
			Escribir 'Opcion invalida'
			Retorno
	FinSegún
	
SiNo
	si Ret_r=3 Entonces
		Escribir "Retire su tarjeta"
	SiNo
		si Ret_r>3 Entonces
			Escribir "Operacion Invalida"
			Retorno
		SiNo
			Escribir "Saldo Insuficiente"
		FinSi	
	FinSi
FinSi
FinSi
Fin Funcion


Algoritmo Cajero_Automatico2
		Definir Tarjeta Como Caracter
		Definir S Como Entero
		S = 10000
		Definir CTR Como Entero
		Definir op Como Entero
		Definir Cont Como Entero
		Cont <- 0
		Definir Ret Como Entero
		Definir Ret_r Como Entero
		Definir v Como Entero
		Escribir  'Ingrese su Tarjeta                              (Tocar Cualquier Tecla)'//a Falta de Tarjeta Tocar una tecla cualquiea
		Esperar Tecla
		Repetir
			
			Escribir 'Ingrese su Contraseña' 
			Leer CTR
			Si Longitud(ConvertirATexto(CTR))=4 Entonces 
				Escribir "Bienvenido"
				 Menu(1,2,3,S,Ret, Ret_r,v)
			SiNo

				Escribir "Contraseña invalida"
				Cont= Cont+1
			FinSi
			

		Hasta Que Cont>=3 o op=3 o Re==6 o Ret_r=6 o v==2
		Si Cont==3 Entonces
			Escribir 'Tarjeta Bloqueada Despues de 3 intentos Invalidos'
		FinSi
FinAlgoritmo


