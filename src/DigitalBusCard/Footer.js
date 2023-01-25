import React from 'react'
import "../index.css"
import twitter from "./images/twitter.png"
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import Github from "./images/Github.png"


export default function Footer() {
    return(
        <footer className="footer">
            <div><img src={twitter} alt="twitter"/></div>
            <div><img src={facebook} alt="facebook"/></div>
            <div><img src={instagram} alt="instagram" /></div>
            <div><img src={Github} alt="github"/></div>
        </footer>
    )
}