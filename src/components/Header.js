import React from 'react'
import logo from '../img/wicked-workout-logo-00ea92.png'

const Header = () => {
    return(
        <div>
            <header className="header">
            <img className="ww-logo" src={logo} alt="logo"/>
            </header>
        </div>
    )
}

export default Header