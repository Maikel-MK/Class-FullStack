let op, n1, n2, resultado, res=true

do{
    op=parseInt(prompt("Calculadora: \n1.Suma\n2.Resta\n3.Multiplicar\n4.Dividir\n5.Salir"))
console.log(op)

switch(op){
    case 1:
        n1=parseInt(prompt("Indique Primera Cantidad"))
        n2=parseInt(prompt("Indique Segunda Cantidad"))
        resultado=n1+n2
        alert('El Resultado de la Suma Es:\n'+resultado)
        break

    case 2:
    n1=parseInt(prompt("Indique Primera Cantidad"))
    n2=parseInt(prompt("Indique Segunda Cantidad"))
    resultado=n1-n2
    console.log(resultado)
    alert('El Resultado de la Resta Es:\n'+resultado)
        break

    case 3:
        n1=parseInt(prompt("Indique Primera Cantidad"))
        n2=parseInt(prompt("Indique Segunda Cantidad"))
        resultado=n1*n2
        console.log(resultado)
        alert('El Resultado de la Multiplicacion Es:\n'+resultado)
         break

    case 4:
        n1=parseInt(prompt("Indique Primera Cantidad"))
        n2=parseInt(prompt("Indique Segunda Cantidad"))
        resultado=n1/n2
        console.log(resultado)
        alert('El Resultado de la Division Es:\n'+resultado)
        break

    case 5:

    res=false
    alert('Vuelva Pronto')
    console.log('Salir')

        break   

    default:
        console.log('opcion invalida')
        alert('Opcion Invalida')

        break
}
}while(res)
