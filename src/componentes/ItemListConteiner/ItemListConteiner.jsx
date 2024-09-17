himport {useEffect , useState} from "react";
import { getProductos } from "../../asynmock";
import ItemList from "../ItemList/ItemList";

const ItemListConteiner = () => {

    const [productos , setProductos] = useState ([])

    useEffect (() =>{
   
        getProductos ()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))
    } , [])

    return (

        <>
        <h2 style={{textAlign :  "center"}}> mis productos</h2>
        <ItemList productos ={productos} />

        </>
    )
}

export default ItemListConteiner

