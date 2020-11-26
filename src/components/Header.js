import React from 'react'
import logo from '../img/wicked-workout-logo-00ea92.png'
import './Header.css'

const Header = () => {
    return(
        <div>
            <header className="header">
            <h1>Wicked Workout</h1>
            <img className="ww-logo" src={logo} alt="logo"/>
            </header>
        </div>
    )
}

export default Header