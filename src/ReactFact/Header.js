import React from 'react'
import "../index.css"
import logo from "../images/logo.png"

function Header() {
    return(
        <header>
            <nav className="nav">
            <img src={logo} 
            className="logo" 
            alt="react-logo"
             />
              <ul className="nav-items"> 
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li> 
              </ul>
            </nav>
        </header>
    )
}

export default Header

