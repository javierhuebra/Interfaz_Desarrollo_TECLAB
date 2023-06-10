/* ------------------------------------------------------------------------------------------------------------------
Institución: TECLAB
Carrera: Tecnicatura Superior en Programación
Alumno: Huebra Javier Emanuel

Este proyecto base fue proporcionado por la cátedra para ir anexandole la funcionalidad en cuatro instancias 
------------------------------------------------------------------------------------------------------------------ */

const carritoFrutas = new Array() //Inicializo un arreglo vacio con el constructor Array

//ProductosConId esta definido en el archivo productos

const agregarAlCarrito = ( frutaId ) => { //Funcion que recibe un id y busca un producto con ese id
    
    if(frutaId > 0){
        const valor = productosConId.find( elemento => elemento.id === frutaId) //Busca con el metodo find() un elemento del arreglo en el cual su id sea igual al parametro que requiere la funcion
        if(valor !== undefined){
            
            carritoFrutas.push(valor) //Agrego al carrito el objeto con id espcificado
        }
    }

    console.table(carritoFrutas) //Imprime una tabla con los valores que se van registrando con cada click
}



