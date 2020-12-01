import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faGithub,
    faInstagram,
    faLinkedin 
} from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footer">
            <footer className="footer">
                <h3>
                    <Link to='about-me'
                        className='link-about-me'>
                        A propos de moi
                    </Link>
                </h3>
                <h3>
                    <Link to='about-tabata'
                    className='link-about-tabata'>
                        A propos de la méthode Tabata
                    </Link>
                </h3>
                <h3>
                    <h4 key='mail'><a href={`mailto:tadamiura@gmail.com`}>N'hésitez pas à me contacter <span className="email">tadamiura@gmail.com</span></a></h4>
                    <span className='logo-container'>
                        <h4 key='likedin'><a href="" target='blank'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></h4>
                        <h4 key='github'><a href="" target='blank'><FontAwesomeIcon icon={faGithub} size="2x" /></a></h4>
                        <h4 key='instagram'><a href="" target='blank'><FontAwesomeIcon icon={faInstagram} size="2x" /></a></h4>
                    </span>
                </h3>
                {/* <Link to='about-me'
                className='link-about-me'>
                ABOUT ME
                </Link>
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
                </span> */}
            </footer>
        </div>
    )
}

export default Footer