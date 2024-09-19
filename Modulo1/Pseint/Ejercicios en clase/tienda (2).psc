Algoritmo tienda
	Definir productos como Caracter
	definir cont Como Entero
	cont = 0
	definir opcionP Como Caracter
	definir agregarPro Como caracter
	//agregarPro: si / no
	definir tipoEnvio Como Entero
	//tipoEnvio---- 1. Delivery, 2. Pickup
	definir tipoPago Como Entero
	//tipoPago--- 1.efectivo, 2.Tarjetas, 3.Pago Movil
	definir pagoAprobado Como Logico	
	definir precio Como Real
	definir total como real
	Definir formularioDelivery Como Caracter
	definir costoDelivery Como Entero
	definir pedido Como Caracter
	definir factura Como Logico
	factura = falso
	pedido = " "
	total = 0
	costoDelivery = 3

	//definir los productos
	productos = "Hamburguesa, Pizza, Sushi"
	Escribir "Bienvenido a nuestra tienda, por favor indique que desea ordenar"
	
	//Escribir "Usted selecciono la opcion: ",opcionP
	Repetir
		Escribir productos
		leer opcionP	 
		si opcionP == "Hamburguesa" Entonces
			precio = 5
			total = total + precio
			pedido = pedido + "Hamburguesa "
			Escribir "La Hamburguesa tiene un costo de $",precio
		SiNo
			si opcionP == "Pizza" Entonces
				precio = 10
				total = total + precio
				pedido = pedido + "Pizza "
				Escribir "La Pizza tiene un costo de $",precio
				
			SiNo
				si opcionP == "Sushi" Entonces
					precio = 10
					total = total + precio
					pedido = pedido + "Sushi "
					Escribir "El Sushi tiene un costo de $",precio
				SiNo
					Escribir "La opcion que marco es incorrecta"
				finsi
			finsi
		FinSi
		
		Escribir "Desea agregar otro producto?(si/no)"
		leer agregarPro
	Hasta Que agregarPro == "no"
	
	//escribir "total: $",total
	
	Escribir "Marque opcion 1. Delivery, 2. Pickup"
	leer tipoEnvio
	si tipoEnvio == 1 Entonces
		total = total + costoDelivery //sumamos el costo del delivery al total que teniamos en el carrito
		Escribir "Por favor indique su nombre completo, direccion de envio"
		leer formularioDelivery
	SiNo
		si tipoEnvio == 2 Entonces
			escribir "pickup, por favor "
		FinSi
	FinSi
	
	Mientras  cont < 3 y factura == falso hacer
		Escribir "Indique la forma de pago: 1. Efectivo, 2. Debito/Credito, 3. Pago movil"
		leer tipoPago
		
		si tipoPago == 1 Entonces
			//efectivo
			Escribir "Ha seleccionado La forma de pago EFECTIVO"
			pagoAprobado = Verdadero
		sino
			si tipoPago == 2 Entonces
				//debito/credito
				Escribir "Ha seleccionado La forma de pago DEBITO/CREDITO"
				pagoAprobado = Falso
			SiNo
				//pago movil
				Escribir "Ha seleccionado La forma de pago PAGO MOVIL"
				pagoAprobado = Verdadero
			FinSi
			
		FinSi
		
		//verificar si el pago fue aprobado
		si pagoAprobado == Verdadero Entonces
			escribir "Su compra ha sido satisfactoria, aqui tiene su factura"
			Escribir "Su pedido: ",pedido, " y el total es: ",total
			factura = Verdadero
		SiNo
			//contamos errores, no debe pasar de 3 intentos
			cont = cont + 1
			Escribir  "Ocurrio un error al procesar el pago, intente nuevamente"
		Finsi
		
	FinMientras
	
	si cont == 3 Entonces
		Escribir "Tercer intento fallido, intente de nuevo en 10 minutos"
	SiNo
		
	FinSi
	
	
	
	
	
	
	
FinAlgoritmo
