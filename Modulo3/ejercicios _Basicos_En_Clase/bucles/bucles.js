/*
for
while 
do while
*/


/*
SINTAXIS DEL FOR

FOR(INICIALIZACION); (CONDICION);(EXPRECION QUE DELIMITA EL FINAL){
    //INSTRUCCIONES
}


var arreglo = [1,2,3]

for(var i=0;i<3;i++){
    //console.log(arreglo[i])
    if(i%2==0){
    //es par
        console.log(i+" es par")
    }else{
         console.log(i+" es impar")
    }
}



var arreglo= []

for(var i=0;i<3;i++){
    arreglo[i] = prompt("ingrese un valor")
   // console.log(arreglo[i])

    if(arreglo[i]%2==0){
        //es par
            console.log(arreglo[i]+" es par")
        }else{
             console.log(arreglo[i]+" es impar")
        }

}

*/

/*
SINTAXIS DEL WHILE (MIENTRAS):
//SE INGRESA MIENTRAS LA CONDICION ES VERDADERA CUANDO 
SEA FALSA TERMINA EL MIENTRAS

WHILE(CONDICION){
    //INSTRUCCIONES
}


var i=0
var cond = true
var contPar = 0
var contImpar = 0


while(i<20){

    if(i%2==0){
        //es par
           // console.log(i+" es par")
           contPar++
        }else{
            // console.log(i+" es impar")
            contImpar++
        }
    //console.log(i)
//no itera solo siempre debe agregarse el i++
    i++
}
console.log("Hay "+contPar +" Numeros Pares")
console.log("Hay "+contImpar +" Numeros Impares")
*/

/*
SINTAXIS DEL DO WHILE

DO{
    //INSTRUCCIONES
}WHILE(CONDICION)


var i = 0
var contPar = 0
var contImpar = 0
var intentos = 0


do{
    i=prompt("Ingrese un valor")

    if(i%2==0){
        //es par
           // console.log(i+" es par")
           contPar++
        }else{
            // console.log(i+" es impar")
            contImpar++
        }

    intentos++
    
}while(intentos<=3)

console.log("Hay "+contPar +" Numeros Pares")
console.log("Hay "+contImpar +" Numeros Impares")



var op=1

switch(op){
    case 1:
        //Cambio de contraseña
    break
    //consultar saldo
    case 2:

    break
    console.log("la opcion que ingreso es incorrecta")
    default:

        break
}
*/