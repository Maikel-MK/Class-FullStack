        // ELEMENTOS
        const formulario = document.getElementById('formulario');
        const Tamaño = document.getElementsByName('Pizza');
        const Extra = document.getElementById('checkboxes');
        const TOTAL = document.getElementById('resultado');
        const Errores = document.getElementById('error');
        const cancelarBtn = document.getElementById('cancelarBtn');

        // EVENTOS
        for (let i = 0; i < Tamaño.length; i++) {
           Tamaño[i].addEventListener('change', mostrarIngredientes);
       }

       formulario.querySelector('.button-primary').addEventListener('click', calcularPrecio);
       
       // Evento para el botón "Cancelar"
       cancelarBtn.addEventListener('click', ocultarIngredientes);

       // FUNCIONES

       // Función para mostrar ingredientes extra
       function mostrarIngredientes() {
           Extra.style.display = 'block'; // Siempre mostrar cuando se selecciona un tamaño
           Errores.textContent = ''; // Limpiar mensajes de error
           Errores.style.display = 'none'; // Ocultar mensaje de error
           TOTAL.style.display = 'none'; // Ocultar mensaje de resultado
       }

       // Función para ocultar ingredientes extra y borrar el mensaje
       function ocultarIngredientes() {
           Extra.style.display = 'none';
           TOTAL.textContent = '';
           Errores.textContent = '';
           
           // Reiniciar las selecciones
           for (let i = 0; i < Tamaño.length; i++) {
               Tamaño[i].checked = false; // Desmarcar todos los tamaños
           }
           
           const checkboxesExtra = Extra.querySelectorAll('.Extra');
           checkboxesExtra.forEach(checkbox => {
               checkbox.checked = false; // Desmarcar todos los ingredientes extras
           });
       }

       function calcularPrecio() {
           // Obtén el tamaño de la pizza seleccionado
           let Diametro = null;
           for (let i = 0; i < Tamaño.length; i++) {
               if (Tamaño[i].checked) {
                   Diametro = Tamaño[i].id;
                   break;
               }
           }

           // Si no se seleccionó un tamaño, muestra un mensaje de error
           if (Diametro === null) {
               TOTAL.textContent = '';
               Errores.textContent = 'Por favor, seleccione un tamaño de pizza';
               Errores.style.display = 'block'; // Mostrar mensaje de error
               return;
           }

           // Calcula el radio del tamaño de la pizza
           let radio = 0;
           switch (Diametro) {
               case 'Pizzap':
                   radio = 5 * 0.3; // Pizza pequeña
                   break;
               case 'Pizzam':
                   radio = 7 * 0.3; // Pizza mediana
                   break;
               case 'Pizzag':
                   radio = 12 * 0.3; // Pizza grande
                   break;
           }

           // Calcula el área de la pizza
           let área = Math.PI * (radio ** 2);

           // Calcula el precio base según el área de la pizza
           let precioBase = área * 1.5; // Costo de preparación

           // Obtén los ingredientes seleccionados
           const checkboxesExtra = Extra.querySelectorAll('.Extra');
           let precioExtraTotal = 0;

           for (let i = 0; i < checkboxesExtra.length; i++) {
               if (checkboxesExtra[i].checked) {
                   switch (Diametro) {
                       case 'Pizzap':
                           precioExtraTotal += 1; // Precio por ingrediente extra en pizza pequeña
                           break;
                       case 'Pizzam':
                           precioExtraTotal += 2; // Precio por ingrediente extra en pizza mediana
                           break;
                       case 'Pizzag':
                           precioExtraTotal += 4; // Precio por ingrediente extra en pizza grande
                           break;
                   }
               }
           }

           // Calcula el precio total
           const precioTotal = precioBase + precioExtraTotal;

           // Muestra el resultado y limpia errores anteriores
           TOTAL.textContent = `El precio de la pizza es: $${precioTotal.toFixed(2)}`;
           TOTAL.style.display = 'block'; // Mostrar mensaje de resultado
           Errores.style.display = 'none'; // Ocultar mensaje de error si se calcula correctamente
       }