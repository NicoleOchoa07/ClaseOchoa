class Producto {
    constructor(id, nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto(1, "Lorem", "Alfa", 120, 22)
const producto2 = new Producto(2, "Lorem", "Beta", 500, 21)
const producto3 = new Producto(3, "Imsum", "Gama" , 200, 40)
const producto4 = new Producto(4, "Sit", "Delta",  140, 10)
const producto5 = new Producto(5, "Amet", "Omega" , 1400, 40)
const producto6 = new Producto(6, "Elit", "Octa",  1500, 5)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

const divProductos = document.getElementById("divProductos")

productos. forEach((productoArray) => {
    divProductos. innerHTML += `
 <div class="tarjeta productos">
        <div class="card-body">
 <h5 class="card-title">${productoArray. nombre}</h5>
 <p class="card-text">Marca: ${productoArray. marca}</p>
 <p class="card-text">Precio: $${productoArray. precio}</p>
 <p class="card-text">Stock: ${productoArray. stock}</p>
    </div>
  </div>
    `
})
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}
const idForm = document.getElementById("idForm")
const botonUsers = document.getElementById("botonUsers")
const divUsers = document.getElementById("divUsers")
const users  = []
idForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = documento.getElementById("username").value
    const email = documento.getElementById("email").value
    const password = documento.getElementById("password").value
    const user = new User(username, email, password)
    users.push(user)
    idForm.reset()
    console.log(users))
})

