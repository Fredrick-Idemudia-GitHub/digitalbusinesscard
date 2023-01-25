import React from 'react'
import Header from './Header'
import "./index.css"
import MainComponent from './MainComponent'
import Footer from './Footer'
import Copyright from './Copyright'


export default function Background() {
    return(
        
            <div className='bg'>
                <Copyright />
                <Header />
                <MainComponent />
                <Footer />
            </div>
        
    )
}