import React from 'react'
import logo from '../img/wicked-workout-logo-00ea92.png'

const Header = () => {
    return(
        <div>
            <header className="header">
            <img className="ww-logo" src={logo} alt="logo"/>
            <h1>Wicked Workout</h1>
            </header>
        </div>
    )
}

export default Header