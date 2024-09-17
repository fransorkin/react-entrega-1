
const misProductos = [

    {id : 1 , nombre : "zapatilla negra" , precio : 500 , img : "./img/zapatillas-negras.jpg"} ,
    {id : 2 , nombre : "zapatilla amarilla" , precio : 500 , img : "./img/zapatillas-amarillas.jpg"} ,
    {id : 3 , nombre : "zapatilla rosa" , precio : 500 , img : "./img/zapatillas-rosas.jpg"} ,
    {id : 4 , nombre : "zapatilla azul" , precio : 500 , img : "./img/zapatillas-azules.jpg"} ,
    
]



 export const getProductos = () => {

    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve (misProductos)
        } ,2000) ;
    })
} 


 export const getUnProducto = (id) => {

    return new Promise (resolve => {

        setTimeout (()=>{

            const producto = misProductos.find(item => item.id == id)
            resolve(producto)
        } , 2000)
    })
}
