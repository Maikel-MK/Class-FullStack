Algoritmo Ejercicio1
// 1. Para un valor entero positivo Seg que representa una cantidad en segundos, indicar su equivalente en minutos, horas y días
	Definir s,m,h Como Real
	Repetir
	Escribir "---------------------------------------------------"
	Escribir "Si Desea Salir Pulce 0"	
	Escribir "Ingrese La Cantidad de Segundos que desea Calcular"
	Leer s

		si s>0 Entonces
			m= s/60
	
		
		si m>=0 Entonces
			h= m/60
		FinSi
		
		si h>=0 Entonces
			d= h/24
		FinSi
		
		Escribir " | Segundos: ",s, " |"
		Escribir " | Minutos: ", m, " |"
		Escribir " | Horas: ",   h, " |"
		Escribir " | Dias ",     d, " |"
	SiNo
		
		si s<0 Entonces
			Escribir "!!!!!!!!!!!!!!!!!!!"
			Escribir "Valor no Permitido"
			Escribir "!!!!!!!!!!!!!!!!!!!"
		SiNo
			Si s=0 Entonces
				Escribir "Nos Vemos "
			FinSi
		FinSi
	FinSi
	
Hasta Que s=0
FinAlgoritmo

