import React from "react";
import reactlogo from "../images/logo.png"
import "./mystyle.css"
import { createContext, useState,useContext } from "react";
import Footer from "./Footer";
import Body  from "./Body";

export const ThemeContext = createContext(null);

export default function Header() {

    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light")); 
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>

            <div className="div-wrapper" id={theme}>
                <header className="nav-header">
                    <nav><img src={reactlogo} alt="react-logo" className="logo-size"/>
                    </nav>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><button onClick={toggleTheme}>Toggle mode</button></li>

                    </ul>
                </header>
                    <div>
                        <h1 className="header1">
                        Fun Facts About Learning React.
                        </h1>
                    </div>
                    <Body />
                    <Footer />
            </div>
        </ThemeContext.Provider>
    )
}


