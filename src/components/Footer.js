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
                <h4>Retrouvez moi aussi sur : </h4>
                <span className='logo-container'>
                    <h4 key='likedin'><a href="https://www.linkedin.com/in/tadatoshimiura/" target='blank'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></h4>
                    <h4 key='github'><a href="https://github.com/tadamiura" target='blank'><FontAwesomeIcon icon={faGithub} size="2x" /></a></h4>
                    <h4 key='instagram'><a href="https://www.instagram.com/tadmildura/" target='blank'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    </h4>
                </span>
                <h4 key='mail'><a href={`mailto:tadamiura@gmail.com`}>N'hésitez pas à me contacter <span className="email">tadamiura@gmail.com</span></a></h4>
            </footer>
        </div>
    )
}

export default Footer