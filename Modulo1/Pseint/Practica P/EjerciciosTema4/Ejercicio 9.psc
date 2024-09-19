Algoritmo Ejercicio9
//	9. Indicar si un alumno aprobó o no una materia conformada por 2 parciales (que representan el 50% de la definitiva), 2
//	quices (30% de la definitiva) y 2 proyectos (el primero 10% y el segundo 20%). En el caso de que su definitiva sea
//	mayor o igual a 9 pero menor a 9,5, indicarle que debe asistir a actividades de recuperación. Si la nota es menor a 9 el alumno está reprobado.
	
	Repetir
		Escribir "-------------------------"
		Escribir "Si desea salir Ingrese 0 en todas las Notas"
		Escribir "Notas de los Parciales (Cada Parcial tiene un maximo de 2.5)"
		Leer P1, P2
		Escribir "-------------------------"
		Escribir "Notas de los Qüices(Cada Qüiz tiene un maximo de 1.5)"
		Leer Q1, Q2
		Escribir "-------------------------"
		Escribir "Notas de los Proyectos (El 1er Proyecto tiene un maximo de 1 y el 2do un maximo de 2)"
		Leer Y1, Y2
		Escribir "-------------------------"
		
		si P1<=2.5 y P2<=2.5 y Q1<=1.5 y Q2<=1.5 y Y1<=1 y Y2<=2 Entonces
			
			Si P1+P2+Q1+Q2+Y1+Y2>0 Entonces
				si P1+P2+Q1+Q2+Y1+Y2>9.5 Entonces
					Escribir "Felicidades Aprovado con una nota de: ",P1+P2+Q1+Q2+Y1+Y2," Puntos"
				SiNo
					si P1+P2+Q1+Q2+Y1+Y2>=9 y P1+P2+Q1+Q2+Y1+Y2<= 9.5 Entonces
						Escribir "Debe asistir a Actividades de Recuperacion su Nota es de:",P1+P2+Q1+Q2+Y1+Y2 " Puntos"
						
					SiNo
						si P1+P2+Q1+Q2+Y1+Y2<9 y P1+P2+Q1+Q2+Y1+Y2>0 Entonces
							Escribir "Mejor Intento para la Próxima Reprobó con una Nota de: ",P1+P2+Q1+Q2+Y1+Y2," Puntos"
							
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
		
		
		si P1+P2+Q1+Q2+Y1+Y2<0 o P1+P2+Q1+Q2+Y1+Y2>11 o P1>2.5 o P2>2.5 o Q1>1.5 o Q2>1.5 o Y1>1 o Y2>2 Entonces
			Escribir "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
			Escribir "Ingreso Alguna nota mal, Revise su error"
			Escribir "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
		FinSi
		si P1+P2+Q1+Q2+Y1+Y2=0 Entonces
			Escribir "~~~~Vuelva Pronto~~~~~"
		FinSi
		
	Hasta Que P1+P2+Q1+Q2+Y1+Y2=0
	
FinAlgoritmo
