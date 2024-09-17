import React, { useEffect, useState } from "react"; 
import { getUnProducto } from "../../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailConteiner = () =>{

    const [producto , setproducto] = useState (null)

    useEffect(()=> {
        getUnProducto (1)
        .then(respuesta => setproducto(respuesta))
    } , []) 

    return (
        <div>
        <ItemDetail {...producto} />
        </div>
    )
}
export default ItemDetailConteiner