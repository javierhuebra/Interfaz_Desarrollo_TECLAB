/* ------------------------------------------------------------------------------------------------------------------
Institución: TECLAB
Carrera: Tecnicatura Superior en Programación
Alumno: Huebra Javier Emanuel

Este proyecto base fue proporcionado por la cátedra para ir anexandole la funcionalidad en cuatro instancias 
------------------------------------------------------------------------------------------------------------------ */

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

let productosConId = [] //Nuevo arreglo para guardar los productos y agregarle el id sin escribirlo a mano

const retornarCard = (objeto) => { //Función que recibe un objeto y retorna un string de código HTML para insertar en el DOM
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

let divContainer = document.querySelector('.container'); //Referencio al div con clase container para insertar el codigo HTML
let i=1 //Variable para asignar los id
let cards='' //Variable para ir guardando lo que retorna retornarCard y poder insertarlo con un solo renderizado ya que cuando se usa innerHTML borra y vuelve a escribir y puede ser poco eficiente

productos.forEach( ( producto ) => {
    producto.id = (i++) //Le pongo el id a cada elemento
    cards += retornarCard(producto) //Guardo todo el codigo html en una variable de tipo string para insertarlo en una sola vez
    
    productosConId.push(producto) //Voy guardando cada objeto en el nuevo arreglo que cree porque los productos de este arreglo tendrán el id
})
divContainer.innerHTML = cards //Inserto el HTML sin renderizar varias veces el DOM

