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
                <h4 key='mail'><a href={`mailto:tadamiura@gmail.com`}>N'hésitez pas à me contacter <span className="email">tadamiura@gmail.com</span></a></h4>
                <span className='logo-container'>
                    <h4 key='likedin'><a href="" target='blank'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></h4>
                    <h4 key='github'><a href="" target='blank'><FontAwesomeIcon icon={faGithub} size="2x" /></a></h4>
                    <h4 key='instagram'><a href="" target='blank'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    </h4>
                </span>
            </footer>
        </div>
    )
}

export default Footer