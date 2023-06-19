/* ------------------------------------------------------------------------------------------------------------------
Institución: TECLAB
Carrera: Tecnicatura Superior en Programación
Alumno: Huebra Javier Emanuel

Este proyecto base fue proporcionado por la cátedra para ir anexandole la funcionalidad en cuatro instancias 
------------------------------------------------------------------------------------------------------------------ */


//ProductosConId esta definido en el archivo productos

const agregarAlCarrito = (frutaId) => { //Funcion que recibe un id y busca un producto con ese id

    if (frutaId > 0) {
        const valor = productosConId.find(elemento => elemento.id === frutaId) //Busca con el metodo find() un elemento del arreglo en el cual su id sea igual al parametro que requiere la funcion
        if (valor !== undefined) {

            carritoFrutas.push(valor) //Agrego al carrito el objeto con id espcificado
        
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${valor.imagen} ${valor.nombre} agregado al carrito`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    almacenarCarrito(carritoFrutas) //Guarda en LocalStorage el arreglo de frutas selleccionadas

    
}

const almacenarCarrito = (carritoFrutas) => { //Funcion que guarda en localstorage si carritoFrutas tiene algo 

    carritoFrutas.length > 0 && localStorage.setItem("carritoFrutas", JSON.stringify(carritoFrutas)) //Metodo para setear valores en localstorage
    
}

const recuperarCarrito = () => { //Función que lee los datos guardados en localstorage
    
    const contenido = localStorage.getItem('carritoFrutas'); //Metodo para acceder a los datos de una key en localstorage
    const carrito = contenido ? JSON.parse(contenido) : []; //Operador ternario para comparar y asignarle los valores a carrito
    
    console.log(contenido ? 'Tiene algo el carrito' : 'La clave no existe o no tiene nada');
    
    return carrito; //retorno de carrito
  };

const carritoFrutas = recuperarCarrito() //Se le asigna a carritoFrutas lo que retorna la funcion recuperarCarrito()

//Se imprime lo que hay en local siempre que se recarga la pagina
console.log(carritoFrutas)


