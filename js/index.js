/* ------------------------------------------------------------------------------------------------------------------
Institución: TECLAB
Carrera: Tecnicatura Superior en Programación
Alumno: Huebra Javier Emanuel

Este proyecto base fue proporcionado por la cátedra para ir anexandole la funcionalidad en cuatro instancias 
------------------------------------------------------------------------------------------------------------------ */

const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('.button') //Se referencia al elemento del DOM que tiene todas esas clases
    
    if (botonesAgregar != null) { //Si la variable es distinta de null

        for (const boton of botonesAgregar) { //For...of es otra forma de iterar parecida al for each 
            boton.addEventListener('click', (event) => {
                agregarAlCarrito(Number(event.target.id)) //Funcion definida en carrito, se convierte en number el event.target.id porque era un String y no tenia el mismo tipo que producto.id
                
            })
        }

    }

}


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

const productos_data = []
const url = 'https://javierhuebra.github.io/Interfaz_Desarrollo_TECLAB/datos.json'


const obtenerProductos = () => {
   
    
    let divContainer = document.querySelector('.container'); //Referencio al div con clase container para insertar el codigo HTML
    let i = 1 //Variable para asignar los id
    let cards = '' //Variable para ir guardando lo que retorna retornarCard y poder insertarlo con un solo renderizado ya que cuando se usa innerHTML borra y vuelve a escribir y puede ser poco eficiente
    
    fetch(url)
        .then(response => response.json())//Se convierte el objeto response en un json 
        .then(data => {
            data.forEach((producto) => {
                producto.id = (i++) //Le pongo el id a cada elemento
                cards += retornarCard(producto) //Guardo todo el codigo html en una variable de tipo string para insertarlo en una sola vez
                
                productos_data.push(producto) //Voy guardando cada objeto en el nuevo arreglo que cree porque los productos de este arreglo tendrán el id
            })
            divContainer.innerHTML = cards //Inserto el HTML sin renderizar varias veces el DOM
            
            activarClickEnBotones() //Se invoca a la función para que ejecute su código
        })
        .catch(error => {
            // Manejo de errores
            console.log('Ha ocurrido un error:', error);
        });
             

}

obtenerProductos()
