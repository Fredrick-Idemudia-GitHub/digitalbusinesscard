import React from 'react'
import "../index.css"
import fred from "./images/fred.jpg"

function Header() {
    return(
        
        <header className='header'>
            <img src={fred} 
            className="fred-picture" 
            alt="fred_photo"
             />
        </header>
    )
}

export default Header

