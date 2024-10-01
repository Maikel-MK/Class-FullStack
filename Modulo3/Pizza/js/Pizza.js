const seleccion = document.querySelector('.Extra')
let suma = 0


function seleccionarPizza(Pizzas){
    const tamaño = document.getElementById('checkboxes')
    if(Pizzas){
        tamaño.style.display ='block'
        
        seleccion.for((checkbox)=>{
            checkbox.disabled = false
        })
    }else{
        tamaño.style.display = 'none'
        limpiarHTML()
    }
}

function limpiarHTML(){
    seleccion.for((checkbox)=>{
        checkbox.checked = false; 
        checkbox.disabled = true;
    })

}

function total(){
seleccion.for((checkbox)=>{
    if (checkbox.checked){
        suma += parseInt(checkbox.value)
    }
})

document.getElementById('resultado').innerText = `EL valor de su Pizza es de: ${suma}`

}






