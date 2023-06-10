const productos = [
    {
        imagen: "🍌",
        nombre: "Bananas",
        precio: 220
    },
    {
        imagen: "🍎",
        nombre: "Manzanas",
        precio: 200
    },
    {
        imagen: "🥝",
        nombre: "Kiwis",
        precio: 280
    },
    {
        imagen: "🍈",
        nombre: "Melón",
        precio: 350
    },
    {
        imagen: "🍍",
        nombre: "Piñas",
        precio: 320
    },
    {
        imagen: "🍅",
        nombre: "Tomates",
        precio: 140
    },
    {
        imagen: "🥥",
        nombre: "Cocos",
        precio: 270
    },
    {
        imagen: "🍉",
        nombre: "Sandias",
        precio: 200
    },
    {
        imagen: "🍑",
        nombre: "Duraznos",
        precio: 310
    },
    {
        imagen: "🫐",
        nombre: "Arandanos",
        precio: 650
    },
    {
        imagen: "🥭",
        nombre: "Mango",
        precio: 290
    },
    {
        imagen: "🍇",
        nombre: "Uvas",
        precio: 700
    },
    {
        imagen: "🍐",
        nombre: "Peras",
        precio: 320
    },
    {
        imagen: "🍒",
        nombre: "Cerezas",
        precio: 1100
    },
    {
        imagen: "🍓",
        nombre: "Frutillas",
        precio: 600
    },
    {
        imagen: "🍋",
        nombre: "Limones",
        precio: 260
    }
]

let productosConId = [] //Variable global para no escribir uno por uno los id en el arreglo

const retornarCard = (objeto) => {
    return `
    <div class="card">
        <div class="card-image">${objeto.imagen}</div>
        <div class="card-name">${objeto.nombre}</div>
        <div class="card-price">${objeto.precio}</div>
        <div class="card-button">
        <button class="button button-outline button-add" id="${objeto.id}"
            title="Agregar ${objeto.nombre} al carrito">+</button>
        </div>
    </div>
    `
}

let divContainer = document.querySelector('.container');
let i=1
let cards=''

productos.forEach( ( producto ) => {
    producto.id = (i++) //Le pongo el id a cada elemento
    cards += retornarCard(producto) //Guardo todo el codigo html en una variable de tipo string para insertarlo en una sola vez
    
    productosConId.push(producto) //Voy guardando cada objeto en el nuevo arreglo que cree
})
divContainer.innerHTML = cards //Inserto el HTML sin renderizar varias veces el DOM

