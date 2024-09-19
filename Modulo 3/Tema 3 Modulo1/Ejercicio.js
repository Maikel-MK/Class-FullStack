let Ejercicios,Ej1,temp1,temp2,temp3,temp4,precio,ahorro,paga,segundos,minutos,horas,Ej2,a,b,c,x,y,r,p,q,b1,b2,h,resultado,adios=true

Ejercicios=prompt("Ejercicios a Presentar:\n1-Problemas\n2-Expreciones Matematicas")
console.log(Ejercicios)

switch(Ejercicios){
    case'1':
    Ej1=prompt('1.- Promedio de 4 Temperaturas en °C a °F\n2.- Descuento del 25% de un Curso\n3.- Conversion de Segundos a Minutos y Horas')

    switch(Ej1){
        case'1':
        temp1=parseInt(prompt('Primera Temperatura en Celsius'))
        temp2=parseInt(prompt('Segunda Temperatura en Celsius'))
        temp3=parseInt(prompt('Tercera Temperatura en Celsius'))
        temp4=parseInt(prompt('Cuarta Temperatura en Celsius'))
        console.log(temp1,temp2,temp3,temp4)
        temp1=(temp1*1.8)+32
        temp2=(temp2*1.8)+32
        temp3=(temp3*1.8)+32
        temp4=(temp4*1.8)+32

        alert('La conversion de Celcius a Fahrenhei de cada uno es:\n'+'--1era Temperatura en Fahrenhei: '+temp1+' °F'+'\n--2da Temperatura en Fahrenhei: '+temp2+' °F'+'\n--3era Temperatura en Fahrenhei: '+temp3+' °F'+'\n--4ta Temperatura en Fahrenhei: '+temp4+' °F')   
        
        resultado=(temp1+temp2+temp3+temp4)/4

        alert('El Promedio de las 4 Temperaturas son: \nF°'+resultado)


        break

        case'2':
        precio=parseInt(prompt('Introduzca el Precio del Curso que va a Pagar'))
        alert('¡¡¡Felicidades Actualemente Hay un Descuento Disponible del 25%!!!')

        ahorro= precio*0.25 
        paga=   (ahorro/0.25)-ahorro

        alert('Usted Pagará: '+precio+'\n Con el Descuento paga: '+paga+'\n Y se Ahorra un Total de: '+ahorro)

        break

        case'3':
        segundos= parseInt(prompt('Introduzca los segundos que Desea Convertir a Minutos y Horas'))
        minutos= segundos/60
        horas= segundos*(1/3600)

        alert('La Conversion Queda Así: \n'+'--Segundos: '+segundos+'\n--Minutos: '+minutos+'\n--Horas: '+horas)
        break

        default:
            alert('Opcion no Permitida')
        break
    }
    break

    case'2':
    Ej2=prompt('Elija que Exprecion desea Usar:'+'\n    1    2    3    4    5')

    switch(Ej2){
        case'1':
        x=parseInt(prompt('Defina X'))
        a=parseInt(prompt('Defina A'))
        y=parseInt(prompt('Defina Y'))
        b=parseInt(prompt('Defina B'))

        r=Math.sqrt(Math.pow((x-a),2)+ Math.pow((y-b),2))

        alert('Con X ='+x+'\nCon A ='+a+'\nCon Y ='+y+'\nCon B ='+b+'\nLa Exprecion Da como Resultado: '+r)

        break

        case'2':
        x=parseInt(prompt('Defina X'))
        y=parseInt(prompt('Defina Y'))
        a=parseInt(prompt('Defina A'))
        b=parseInt(prompt('Defina B'))
        r=parseInt(prompt('Defina R'))

        resultado= Math.pow(x,2)+Math.pow(y,2)-2*a*x-2*b*y+Math.pow(a,2)+Math.pow(b,2)-Math.pow(r,2)

        alert('Con X ='+x+'\nCon Y ='+y+'\nCon A ='+a+'\nCon B ='+b+'\nCon R ='+r+'\nLa Exprecion Da como Resultado: '+resultado)

        break

        case'3':
        x=parseInt(prompt('Defina X'))
        c=parseInt(prompt('Defina C'))
        y=parseInt(prompt('Defina Y'))

        a=(Math.sqrt(Math.pow((x+c),2)+Math.pow((y-0),2)))/2+(Math.sqrt(Math.pow((x-c),2)+Math.pow((y-0),2)))/2
        

        alert('Con X ='+x+'\nCon C ='+c+'\nCon Y ='+y+'\nA es igual a: '+a)
        break

        case'4':
        x=parseInt(prompt('Defina X'))
        p=parseInt(prompt('Defina P'))
        a=parseInt(prompt('Defina A'))
        y=parseInt(prompt('Defina Y'))
        q=parseInt(prompt('Defina Q'))
        b=parseInt(prompt('Defina B'))

        resultado=((Math.pow((x-p),2))/(Math.pow(a,2)))+((Math.pow((y-q),2))/(Math.pow(b,2)))

        alert('Con X ='+x+'\nCon P ='+p+'\nCon A ='+a+'\nCon Y ='+y+'\nCon Q ='+q+'\nCon B ='+b+'\nDa como resultado = '+resultado+'='+'1')
        break

        case'5':
        b1=parseInt(prompt('Defina B1'))
        b2=parseInt(prompt('Defina B2'))
        h=parseInt(prompt('Defina H'))

        a=((b1+b2)/2)*h

        alert('Con B1 ='+b1+'\n Con B2 = '+b2+'\n Con H = '+h+'\n A es igual a: '+a)
        break

        default:
            alert('Opcion no Permitida')
        break
    }
    break

    default:
        console.log(Ejercicios)
        alert('... Solo Hay Dos Opciones')
}

