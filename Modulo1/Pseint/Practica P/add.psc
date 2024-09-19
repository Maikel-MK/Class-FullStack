Función salir(k)
	Escribir 'Retire Tarjeta'
	k = 1
FinFunción

Función Retorno (i,S,cont,d,k)
	Menu(i,S,cont,d,k)
FinFunción

Función Menu (i,S,cont,d,k)
	Escribir 'Que Operacion Desea Realizar:'
	Escribir ' Retiro    (1)'
	Escribir ' Consulta  (2)'
	Escribir ' Salir     (3)'
	Leer op
	Según op Hacer
		1:
			Escribir 'Que Operacion Desea Realizar'
			Escribir ' Retiro Rapido    (1)'
			Escribir ' Retiro           (2)'
			Escribir ' Salir            (3)'
			Leer Ret
			Según Ret Hacer
				1:
					Si S>=20 Entonces
						Escribir 'Cuanto Desea Retirar?'
						Escribir '   1. 20'
						Escribir '   2. 50'
						Escribir '   3. 100'
						Escribir '   4. 200'
						Escribir '   5. 500'
						Escribir '   6. Salir'
						Leer Ret_r
					SiNo
						Escribir 'Saldo Insuficiente'
					FinSi
					Según Ret_r Hacer
						1:
							Escribir 'Ha Retirado 20 BS'
							S <- S-20
							Retorno(i,S,cont,d,k)
						2:
							Escribir 'Ha Retirado 50 BS'
							S <- S-50
							Retorno(i,S,cont,d,k)
						3:
							Escribir 'Ha Retirado 100 BS'
							S <- S-100
							Retorno(i,S,cont,d,k)
						4:
							Escribir 'Ha Retirado 200 BS'
							S <- S-200
							Retorno(i,S,cont,d,k)
						5:
							Escribir 'Ha Retirado 500 BS'
							S <- S-500
							Retorno(i,S,cont,d,k)
						6:
							salir(k)
						De Otro Modo:
							Escribir 'Opcion Invalida'
							Retorno(i,S,cont,d,k)
					FinSegún
				2:
					Si S>=1000 Entonces
						Escribir 'Cuanto Desea Retirar?'
						Escribir '   1. 1000'
						Escribir '   2. 1500'
						Escribir '   3. 2000'
						Escribir '   4. 2500'
						Escribir '   5. 5000'
						Escribir '   6. Salir'
						Leer Ret_r
					SiNo
						Escribir 'Saldo Insuficiente'
					FinSi
					Según Ret_r Hacer
						1:
							Escribir 'Ha Retirado 1000 BS'
							S <- -1000
							Retorno(i,S,cont,d,k)
						2:
							Escribir 'Ha Retirado 1500 BS'
							S <- S-1500
							Retorno(i,S,cont,d,k)
						3:
							Escribir 'Ha Retirado 2000 BS'
							S <- S-2000
							Retorno(i,S,cont,d,k)
							Escribir 'Ha Retirado 2500 BS'
							S <- S-2500
							Retorno(i,S,cont,d,k)
						5:
							Escribir 'Ha Retirado 5000 BS'
							S <- S-5000
							Retorno(i,S,cont,d,k)
						6:
							salir(k)
						De Otro Modo:
							Escribir 'Opcion invalida'
							Retorno(i,S,cont,d,k)
					FinSegún
				3:
					salir(k)
				De Otro Modo:
					Escribir 'Operacion Invalida'
					Retorno(i,S,cont,d,k)
			FinSegún
		2:
			Escribir 'Su Saldo Restante son ', S, ' BS'
			Escribir 'Volver (1) o Salir (2)'
			Leer v
			Según v Hacer
				1:
					Retorno(i,S,cont,d,k)
				2:
					salir(k)
				De Otro Modo:
					Escribir 'Operacion Invalida'
					Retorno(i,S,cont,d,k)
			FinSegún
		3:
			salir(k)
		De Otro Modo:
			Escribir 'Operacion Invalida'
			Retorno(i,S,cont,d,k)
	FinSegún
FinFunción

Algoritmo add
	cont <- 0
	Dimensionar a(4), c(4), d(4)
	a[1] <- 'ARht0'; a[2] <- 'Bsdg4'; a[3] <- 'Cwaq7'; a[4] <- 'Dt7w1'
	c[1] <- 1111; c[2] <- 1234; c[3] <- 1010; c[4] <- 4321
	d[1] <- 10000; d[2] <- 5000; d[3] <- 2000; d[4] <- 8000
	Repetir
		Escribir 'ingrese su clave'
		Leer i
		Según i Hacer
			c[1]:
				Escribir 'Bienveido ', a[1]
				S <- d[1]
				Menu(i,S,cont,d,k)
			c[2]:
				Escribir 'Bienveido ', a[2]
				S <- d[2]
				Menu(i,S,cont,d,k)
			c[3]:
				Escribir 'Bienveido ', a[3]
				S <- d[3]
				Menu(i,S,cont,d,k)
			c[4]:
				Escribir 'Bienveido ', a[4]
				S <- d[4]
				Menu(i,S,cont,d,k)
			De Otro Modo:
				Escribir 'Clave Invalida'
				cont <- cont+1
				Si cont=3 Entonces
					Escribir 'Tarjeta Bloqueada Despues de 3 intentos'
				FinSi
		FinSegún
	Hasta Que cont==3 O k==1
FinAlgoritmo
