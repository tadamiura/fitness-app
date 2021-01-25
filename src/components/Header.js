import React from 'react'
import { Link } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import logo from '../img/wicked-workout-logo-00ea92.png'

const Header = () => {
    return(
        <div>
            <header className="header">
                <BurgerMenu />
                <Link
                to={`/`}>
                    <img className="ww-logo" src={logo} alt="logo"/>    
                </Link>
                <Link
                to={`/auth/login`}>
                    <button className="header-login">Se connecter</button>
                </Link>
            </header>
        </div>
    )
}

export default Header