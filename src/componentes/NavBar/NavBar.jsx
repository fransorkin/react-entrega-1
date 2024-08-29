import React from "react";

import "./NavBar.css" ;
import CartWdiget from "./CarWidget/CartWidget";
const NavBar = () => {

    return (
        
    <header>
        <h1>Black Shoes</h1>

    <nav>
    
    <ul>
        <li> Deportivas </li>
        <li>Casual </li>
        <li> Zapatos</li>
    </ul>
    </nav>

    <CartWdiget/>

    </header>

        )
}

export default NavBar 