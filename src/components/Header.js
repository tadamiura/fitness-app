import React from 'react'
import {logo} from '../wicked-workout-logo.png'
import './Header.css'

const Header = () => {
    return(
        <div>
            <header className="header">
            <img src={logo} alt="logo"/>
            <h1>Wicked Workout</h1>
            </header>
        </div>
    )
}

export default Header