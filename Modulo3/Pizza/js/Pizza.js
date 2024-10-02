const seleccion = document.querySelectorAll('.Extra')
const pizzaPequeña = document.querySelector('#Pizzap')
const pizzaMediana = document.querySelector('#Pizzam')
const pizzaGrande = document.querySelector('#Pizzag')
let suma = 0




// function calculo(){

// }





function seleccionarPizza(){

    const tamaño = document.getElementById('checkboxes')
    tamaño.style.display = 'block' // Muestra los checkboxes
    
    seleccion.forEach((checkbox) => {
        checkbox.disabled = false // Permite seleccionar los checkboxes
    })
}


function total(){

const pizzas = document.querySelector('input[name="Pizza"]:checked')

if(pizzas){
    suma += parseInt(pizzas.value)

    // if(pizzaPequeña){
    //     suma*1
    //     console.log('llega1')
    // }else if(pizzaMediana){
    //     suma*2
    //     console.log('llega2')
    // }else if(pizzaGrande){
    //     suma*4
    //     console.log('llega3')
    // }
}

let salsa = document.querySelectorAll('.Extra')

salsa.forEach((Extras)=>{
    if(Extras.checked){
        suma += parseInt(Extras.value)
        console.log('llega')


    }
   
})

document.getElementById('resultado').innerText= `Total de la Pizza: ${suma}`
//reset()
}






