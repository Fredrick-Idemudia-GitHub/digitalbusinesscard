import React from 'react'
import "../index.css"
import email from "./images/email.png"
import linkedin from "./images/linkedin.png"


export default function MainComponent() {
    return(
            <div className='body'>
                <h1>Fredrick Idemudia</h1>
                <p>Full Stack Developer</p>
                <div className='social-icons'>
                    <div className='social-1'>
                        <div className='email-icon'><img src={email} alt="email" /></div>
                        <div className='email-text'>Email</div>
                    </div>
                    <div className='social-2'>
                        <div className='linkedin-icon'><img src={linkedin} alt="linkedin"/></div>
                        <div className='linkedin-text'>Linkedin</div>
                    </div>
                </div>
                <div className='body-text'>
                    <h4>About</h4>
                    <p className='body-text2'>I am a front end developer with
                        a particular interest in making
                        things simple and automating daily
                        tasks. I try to keep up with security
                        and best practice, and am always looking 
                        for new things to learn.
                    </p>
                    <h4>Interest</h4>
                    <p className='body-text2'> Football Addict, reading 
                    news and current affairs. Patience at learning new things,
                    like traditional food and attention to details.
                    </p>
                </div>
                    
            </div>
        )
}

