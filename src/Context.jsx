import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider



function CustomContext(props){

    const [cantCarrito, setCantCarrito] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [carrito, setCarrito] = useState([])



    const agregarAlCarrito = (cant, item) => {   //agregar
        console.log(cant,item)
        setCantCarrito(cantCarrito + cant)

        const copia = carrito.slice(0)
        copia.push(item)
        setCarrito(copia)
    }


    const vaciarCarrito = () => {    //vaciar
        setCantCarrito(0)
        setCarrito([])
    }




    const valorActual = {
        carrito : carrito,
        cantCarrito:cantCarrito,
        precioTotal: precioTotal,
        agregarAlCarrito:agregarAlCarrito,
        //borrarDelCarrito: borrarDelCarrito,
        vaciarCarrito: vaciarCarrito,
        //estaEnCarrito: estaEnCarrito,
    }






    return(

        <Provider value={valorActual}>

            {props.children}
        
        </Provider>
    )
}

export default CustomContext