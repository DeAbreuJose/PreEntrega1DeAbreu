import { useState } from "react";

function Contador(props){

    const [numero, setNumero] = useState(0)

    const incremetear = () => {
        setNumero (numero + 1)
    }

    const decrementar = () => {
        setNumero (numero - 1)
    }

    const confirmar = () => {
        props.handleConfirm(numero)
    }

    return(
        <div className="flex gap-4">
        <button className="p-4 text-black bg-white rounded-full" onClick={incremetear}>+</button>
            <p>{numero}</p>
        <button className="p-4 text-black bg-white rounded-full" onClick={decrementar}>-</button>
        <button onClick={confirmar}>Confirmar</button>
        </div>
    )

    
    
}


export default Contador