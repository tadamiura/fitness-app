import React from 'react'
import instagram from '../instagram-brands.svg'
import github from '../../src/github-brands.svg'
import linkedin from '../../src/linkedin-brands.svg'

import './Footer.css'


const Footer = () => {
    return(
        <div className="footer">
            <footer>
                <ul>
                    <li className="about-me">About me</li>
                    <p className="description">Tadatoshi Miura, french handball strenght and conditioning coach, fitness coach and web developper</p>
                    <li className="contact">Contact</li>
                    <p><a href="mailto:tadamiura@gmail.com">my email</a></p>
                    <li>Follow me</li>
                    <div className="container-rs">
                    <p><a href="https://www.instagram.com/tadmildura/"><img src={instagram} alt="instagram"></img></a></p>
                    <p><a href="https://www.linkedin.com/in/tadatoshimiura/"><img src={linkedin} alt="linkedin"></img></a></p>
                    <p><a href="https://github.com/tadamiura"><img src={github} alt="linkedin"></img></a></p>
                    </div>
                </ul>
            </footer>
        </div>
    )
}

export default Footer