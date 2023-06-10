const carritoFrutas = new Array() //Inicializo un arreglo vacio con el constructor Array

//ProductosConId esta definido en el archivo productos

const agregarAlCarrito = ( frutaId ) => { //Funcion global
    
    if(frutaId > 0){
        const valor = productosConId.find( elemento => elemento.id === frutaId)
        if(valor !== undefined){
            
            carritoFrutas.push(valor) //Agrego al carrito el objeto con id espcificado
        }
    }

    console.table(carritoFrutas) //Imprime una tabla con los valores que se van registrando con cada click
}



