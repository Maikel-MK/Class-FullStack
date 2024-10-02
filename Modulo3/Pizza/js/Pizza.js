const seleccion = document.querySelectorAll('.Extra')
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
}

let salsa = document.querySelectorAll('.Extra')
salsa.forEach((Extras)=>{
    if(Extras.checked){
        suma += parseInt(Extras.value)
    }
   
})

document.getElementById('resultado').innerText= `Total de la Pizza: ${suma}`
reset()
}






