import React, { createContext } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { useContext, useState } from "react";
// import "./mystyle.css"


export default function Components() {
    
    return(
        <div className="container">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}