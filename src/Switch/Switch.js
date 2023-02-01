import React from "react";
import "./switch.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);



    export default function Switch() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light")); 
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="App" id={theme}>
                <h1>Dark and Light Mode Toggle App</h1>
                <div className="button-container">
                    
                    <div className="switch-button">
                        <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
                    </div>
                    <div className="toggle-button">
                        <button className="button-text" onClick={toggleTheme}>
                            <label>{theme === "light" ? "Switch to Darkt Mode" : "Switch to Light Mode"}</label>
                        </button> 
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    )
}