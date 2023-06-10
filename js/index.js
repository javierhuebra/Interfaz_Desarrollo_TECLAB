/* ------------------------------------------------------------------------------------------------------------------
Institución: TECLAB
Carrera: Tecnicatura Superior en Programación
Alumno: Huebra Javier Emanuel

Este proyecto base fue proporcionado por la cátedra para ir anexandole la funcionalidad en cuatro instancias 
------------------------------------------------------------------------------------------------------------------ */

const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('.button.button-outline.button-add') //Se referencia al elemento del DOM que tiene todas esas clases

    if (botonesAgregar != null) { //Si la variable es distinta de null

        for (const boton of botonesAgregar){ //For...of es otra forma de iterar parecida al for each 
            boton.addEventListener('click', (event) => {
                agregarAlCarrito(Number(event.target.id)) //Funcion definida en carrito, se convierte en number el event.target.id porque era un String y no tenia el mismo tipo que producto.id
                
            })
        }

    }


}

activarClickEnBotones() //Se invoca a la función para que ejecute su código, sino no anda. 
