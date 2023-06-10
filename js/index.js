const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('.button.button-outline.button-add')

    if (botonesAgregar != null) {

        for (const boton of botonesAgregar){
            boton.addEventListener('click', (event) => {
                agregarAlCarrito(Number(event.target.id))
                
            })
        }

    }


}

activarClickEnBotones()
