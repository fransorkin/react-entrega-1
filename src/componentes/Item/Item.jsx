import "./Item.css";


const Item = ({id , nombre , precio , img }) => {

    return (
        <div className="CardProductos">

            <img src={img} alt={nombre} />
            <h3> nombre : {nombre}</h3>
            <p>precio : {precio}</p>
            <p>ID : {id}</p>
            <button>Ver detalles</button>
        </div>
    )

}

export default Item