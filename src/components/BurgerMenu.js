import React from 'react'
import { bubble as Menu } from 'react-burger-menu'
import './BurgerMenu.css'
import { NavLink } from 'react-router-dom'


const BurgerMenu = () => {
    return(
        <Menu left>
            <NavLink exact to="/" activeClassName="selected" className="list_burger">Homepage</NavLink>
            <NavLink to="/countdown" activeClassName="selected" className="list_burger">Countdown</NavLink>
        </Menu>
    )
}

export default BurgerMenu