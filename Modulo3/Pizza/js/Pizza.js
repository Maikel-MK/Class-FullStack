   // ELEMENTOS
const formulario = document.getElementById('formulario')
const Tamaño = document.getElementsByName('Pizza')
const Extra = document.getElementById('checkboxes')
const TOTAL = document.getElementById('resultado')
const Errores = document.getElementById('error')
const cancelarBtn = document.getElementById('cancelarBtn')

// EVENTOS
for (let i = 0; i < Tamaño.length; i++) {
   Tamaño[i].addEventListener('change', mostrarIngredientes)
}

formulario.querySelector('.button-primario').addEventListener('click', calcularPrecio)

cancelarBtn.addEventListener('click', ocultarIngredientes)

// FUNCIONES

// Función para mostrar ingredientes extra
function mostrarIngredientes() {
   Extra.style.display = 'block' // Siempre mostrar cuando se selecciona un tamaño
   limpiarMensajes() 
}

// Función para ocultar ingredientes extra y borrar el mensaje
function ocultarIngredientes() {
   Extra.style.display = 'none'
   limpiarMensajes() 
   
   // Reiniciar las selecciones
   for (let i = 0; i < Tamaño.length; i++) {
       Tamaño[i].checked = false // Desmarcar todos los tamaños
   }
   
   const checkboxesExtra = Extra.querySelectorAll('.Extra')
   checkboxesExtra.forEach(checkbox => {
       checkbox.checked = false 
   })
}

function limpiarMensajes() {
   TOTAL.textContent = ''
   Errores.textContent = ''
   TOTAL.style.display = 'none' 
   Errores.style.display = 'none' 
}

function mostrarError(mensaje) {
   Errores.textContent = mensaje
   Errores.style.display = 'block' // Mostrar mensaje de error
}

function mostrarResultado(precio) {
   TOTAL.textContent = `El precio de la pizza es: $${precio.toFixed(2)}`
   TOTAL.style.display = 'block' // Mostrar mensaje de resultado
}

function calcularPrecio() {
   // Obtén el tamaño de la pizza seleccionado
   let Diametro = null
   for (let i = 0; i < Tamaño.length; i++) {
       if (Tamaño[i].checked) {
           Diametro = Tamaño[i].id
           break
       }
   }

   if (Diametro === null) {
       limpiarMensajes()
       mostrarError('Por favor, seleccione un tamaño de pizza')
       return
   }

   // Calcula el radio del tamaño de la pizza
   let radio = 0
   switch (Diametro) {
       case 'Pizzap':
           radio = 5 * 0.3 // +precio de la harina
           break
       case 'Pizzam':
           radio = 7 * 0.3 // +precio de la harina
           break
       case 'Pizzag':
           radio = 12 * 0.3 // +precio de la harina
           break
   }


   let área = Math.PI * (radio ** 2)


   let precioBase = área * 1.5 // Costo de preparación

   // Obtén los ingredientes seleccionados
   const checkboxesExtra = Extra.querySelectorAll('.Extra')
   let precioExtraTotal = 0

   for (let i = 0; i < checkboxesExtra.length; i++) {
       if (checkboxesExtra[i].checked) {
           switch (Diametro) {
               case 'Pizzap':
                   precioExtraTotal += 1 // Precio por ingrediente extra en pizza pequeña
                   break
               case 'Pizzam':
                   precioExtraTotal += 2 // Precio por ingrediente extra en pizza mediana
                   break
               case 'Pizzag':
                   precioExtraTotal += 4 // Precio por ingrediente extra en pizza grande
                   break
           }
       }
   }

   const precioTotal = precioBase + precioExtraTotal

   limpiarMensajes()
   mostrarResultado(precioTotal)
}