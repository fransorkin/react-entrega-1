import React from "react";
import Item from "../Item/Item"
import "./ItemList.css"
const ItemList = ({productos}) => {
    return (


        <div className="ContenedorProductos "> 
            {productos.map(item =><Item key={item.id} {...Item}/>)}
        </div>
    )
}

export default ItemList 