import React from 'react'
import Logo from "../assets/pizzaLogo.png";
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide"></div>
            <img src={Logo} />
        <div className="rightSide"></div>
    </div>
  )
}

export default Navbar
