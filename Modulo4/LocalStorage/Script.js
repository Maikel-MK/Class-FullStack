//Key: Hace referencia a que voy a utilizar para tener acceso al campo value

//Value: Es un campo donde voy a guardar los valores

//Sintaxis para añadir elementos al local estorage:

localStorage.setItem('nombre','Maikel')

sessionStorage.setItem('Nombre','Mai')

//En caso que tengamos un objeto se hace lo siguiente:

const producto = {
    Nombre: 'Telefono',
    Precio: 100
}

//console.log(typeof(producto)) <-- se usa para saber el tipo de dato que estamos usando el Typeof

const productoString = JSON.stringify(producto) //se usa para convertir a string

//console.log(typeof(productoString))

localStorage.setItem('Producto',productoString)

//Ejem: que pasaria si agrego un arreglo
//NOTA

const Meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio']
console.log(Meses)
//localStorage.setItem('Meses',Meses)

const MesesString = JSON.stringify(Meses)

localStorage.setItem('Meses2',MesesString)

//Extraer o consultar los datos de un LocalStorage

const nombre = localStorage.getItem('nombre')
console.log(nombre)

const product = localStorage.getItem('Producto')
console.log(product)

const productoAOBJ = JSON.parse(product)
console.log(productoAOBJ)

const mes = localStorage.getItem('Meses2')

const mesArreglo = JSON.parse(mes)

console.log(mesArreglo)
