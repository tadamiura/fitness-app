import React from 'react'
import instagram from '../instagram-brands.svg'
import github from '../../src/github-brands.svg'
import linkedin from '../../src/linkedin-brands.svg'

import './Footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <footer className="about-me">
                    <h3 className="about-me">About me</h3>
                    <p className="description">Tadatoshi Miura, french strenght and conditioning coach (handball, football, kick-boxing...), fitness coach and web developper</p>
            {/* </footer> */}
            <span className="links-footer">
                <ul>
                    <li> About tabata training</li>
                    <div className="container-links">
                        <p>
                            <a href="https://www.doctissimo.fr/forme/fitness/methode-tabata#">Doctissimo link</a>
                        </p>
                        <p>
                            <a href="https://www.runtastic.com/blog/fr/tabata-entrainement-par-intervalles/">Runtastic link</a>
                        </p>
                        <p>
                            <a href="https://en.wikipedia.org/wiki/Izumi_Tabata">Izumi Tabata wiki link</a>
                        </p>
                    </div>
                    <li className="contact">Contact</li>
                    <p><a href="mailto:tadamiura@gmail.com">my email</a></p>
                    <li>Follow me</li>
                    <div className="container-rs">
                        <p><a href="https://www.instagram.com/tadmildura/"><img src={instagram} alt="instagram"></img></a></p>
                        <p><a href="https://www.linkedin.com/in/tadatoshimiura/"><img src={linkedin} alt="linkedin"></img></a></p>
                        <p><a href="https://github.com/tadamiura"><img src={github} alt="linkedin"></img></a></p>
                    </div>
                </ul>
                </span>
            </footer>
        </div>
    )
}

export default Footer