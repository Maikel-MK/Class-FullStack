var x,y,z

x=10
y=3
z=x+y

document.getElementById('Suma').textContent="El resultado de z es "+z

//se debe estar pendiente del tipo de dato en js donde se debe saber que los numeros son numeros y los string son string pero cuando se muestra en pantalla todo "es un string"

document.querySelector('#suma')//selecciona un id del html
document.querySelector('.clasedeCss')//selecciona un elemento HTML por medio de una clase de CSS
document.querySelector('p')//seleccionar etiquetas HTML

//if (condition){}else if{}else if{}else{}

//for (let index = 0; index < Array.length; index++){
//    const element = Array[index];
//}

//for(let index = 0; index < 5; index++){
//    index = index + 1
//}
/*
//bucles
do{
//repetir
}while(condition)

    while(condition){
        //mientras
    }
if (){

}
*/

var num
num = prompt('por favor ingrese un numero')
console.log(num)
if(num%2==0){
    console.log('es un numero par')
}else{
    console.log('es un numero impar')
}

/*hacer temas 3 y 4 de modulo 1 pero con js*/