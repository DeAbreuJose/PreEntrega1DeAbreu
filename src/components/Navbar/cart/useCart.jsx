import { useContext } from "react";
import { contexto } from "../../../Context";


const useCart = () => {
return useContext(contexto)

}

export default useCart;