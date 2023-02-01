import React from "react";
import reactlogo from "../images/logo.png"
import "./mystyle.css"


export default function Header() {
    return(
        <div className="div-wrapper">
            <header className="nav-header">
                <nav><img src={reactlogo} alt="react-logo" className="logo-size"/></nav>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Switch Button</li>

                </ul>
            </header>
                <h1 className="header1">
                    Fun Facts About Learning React.
                </h1>
        </div>
    )
}