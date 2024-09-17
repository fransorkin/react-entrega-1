import React from "react";
import "./ItemDetail.css"

const ItemDetail = ({id , precio , nombre , img }) => {

    return (
        <div className="ContenedorItem">
        <h2>nombre : {nombre}</h2>
        <h3>precio : {precio}</h3>
        <h3>id : {id}</h3>
        <img  className= "img" src= {img} alt= {nombre} />
        </div>
    )
}

export default ItemDetail