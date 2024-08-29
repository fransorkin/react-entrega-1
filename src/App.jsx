import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from "../src/componentes/ItemListConteiner/ItemListConteiner"
const App = () => {

  return (
    <>
      <NavBar/>
      <ItemListConteiner greeting = "mis productos"/>

      </>
  )
}

export default App
