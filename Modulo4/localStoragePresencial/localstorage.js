//key: referencia a lo que voy a utilizar para tener acceso al campo donde voy a a guardar
//Value: el campo donde voy a colocar los valores

//sintaxis para colocar elementos al LocalStorage(LS)

localStorage.setItem('test','datos de prueba')

sessionStorage.setItem('nombre','Mikie')

//si tenemos un objeto
const producto = {
nombre: 'telefono',
precio: 300
}

//convertir a string
const productoAstring = JSON.stringify(producto)
localStorage.setItem('producto', producto)
console.log(productoAstring)
localStorage.setItem('producto', productoAstring)

//agregar arreglo al LS

const meses= ['Enero','Febrero','marzo','abril']
//convertir a string
const mesesAstring = JSON.stringify(meses)
console.log(mesesAstring)
localStorage.setItem('arreglo', mesesAstring)

