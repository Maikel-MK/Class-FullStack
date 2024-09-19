Algoritmo Tienda
	Definir productos Como Caracter
	// Caracter = Ejemplos 'hola' "hola mundo" '123' 'FALSO' 'etc' 
	Definir Contador Como Entero
	//Entero= 1, 2, 3, n.
	Contador = 1
	//el contador inicia desde 1 si es desde 0 se contaria el 0
	Definir AgregarProdcuto Como Caracter
	Definir OpcionP Como Caracter
	Definir Tipoenvio Como Entero //1= Deliveri, 2= Pickup
	Definir Tipopago Como Entero //1efectivo, 2tarjeta, pago movil
	Definir pagoaprov Como Logico //definir los productos
	//Logico = Verdadero/Falso
	Definir Precio Como Real
	Definir Total Como Real
	//Real = numeros reales
	Definir FormularioDeliv Como Caracter
	
	productos ="Hamburguesa, Pizza, Sushi"
	Repetir
		Escribir productos		
		Leer OpcionP		
		//Escribir "Usted Selecciono ",OpcionP
		
		Si OpcionP == "Hamburguesa" Entonces
			Precio = 5
			Total= Total+Precio
			Escribir "La Hamburguesa cuesta $", Precio
			SiNo
				Si OpcionP == "Pizza" Entonces
					Precio = 10
					Total= Total+Precio
					Escribir "La Pizza cuesta $", Precio
				SiNo
					Si OpcionP == "Sushi" Entonces
						Precio = 15
						Total= Total+Precio
						Escribir "El Sushi cuesta $", Precio
					SiNo
						Escribir "La Opcion que marco no es Valida"
				FinSi
			FinSi
			
		FinSi
			
		Escribir "¿Desea Agregar Algo Mas? (si/no)"
		Leer AgregarProdcuto
		
	Hasta Que  AgregarProdcuto == "no"
	
	Escribir "Total:$ ",Total
	
FinAlgoritmo
