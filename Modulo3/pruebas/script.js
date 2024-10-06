// ...

// Función para calcular el precio
function calcularPrecio() {
    // Obtén el tamaño de la pizza seleccionado
    let tamaño = null;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        tamaño = radios[i].id;
        break;
      }
    }
  
    // Si no se seleccionó un tamaño, muestra un mensaje de error
    if (tamaño === null) {
      resultado.textContent = 'Por favor, seleccione un tamaño de pizza';
      return;
    }
  
    // Calcula el radio del tamaño de la pizza
    let radio = 0;
    switch (tamaño) {
      case 'Pizzap':
        radio = 5;
        break;
      case 'Pizzam':
        radio = 10;
        break;
      case 'Pizzag':
        radio = 20;
        break;
    }
  
    // Calcula el área de la pizza
    let área = Math.PI * (radio ** 2);
  
    // Calcula el precio base según el área de la pizza
    let precioBase = área * 0.1; // ajusta este valor según sea necesario
  
    // Obtén los ingredientes seleccionados
    const ingredientes = [];
    const checkboxesExtra = checkboxes.querySelectorAll('.Extra');
    for (let i = 0; i < checkboxesExtra.length; i++) {
      if (checkboxesExtra[i].checked) {
        ingredientes.push(checkboxesExtra[i].value);
      }
    }
  
    // Calcula el precio de los ingredientes extra
    let precioExtra = 0;
    for (let i = 0; i < ingredientes.length; i++) {
      if (ingredientes[i] !== '0') {
        precioExtra += 1; // ajusta este valor según sea necesario
      }
    }
  
    // Calcula el precio total
    let precioTotal = precioBase + precioExtra;
  
    // Muestra el resultado
    resultado.textContent = `El precio de la pizza es: $${precioTotal.toFixed(2)}`;
  }