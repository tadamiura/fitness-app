import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/wicked-workout-logo-00ea92.png'

const Header = () => {
    return(
        <div>
            <header className="header">
            <Link
            to={`/`}>
                <img className="ww-logo" src={logo} alt="logo"/>    
            </Link>
            </header>
        </div>
    )
}

export default Header