import React, { useState } from 'react'

import burgerMenu from '../img/burger-menu.png'
import burgerClose from '../img/burger-close.png'

import { Link } from 'react-router-dom'

const BurgerMenu = () => {
  const [isMenu, setIsMenu] = useState(false)

  const displayMenuSide = () => {
    setIsMenu(true)
  }

  const hideMenuSide = (e) => {
    setIsMenu(false)
  }

  return (
    <div className='burgerMenu-container'>
      <img
        src={burgerMenu}
        alt='burger menu'
        className='burgerMenu-menu'
        onClick={displayMenuSide}
      />
      <div className={`burgerMenu-side ${isMenu ? '' : 'burgerMenu-hide'}`}>
        <img
          src={burgerClose}
          alt='close menu'
          className='burgerMenu-close'
          onClick={hideMenuSide}
        />
        <div className='burgerMenu-links'>
            <Link
            to={`/`}
            className='burgerMenu-Link'
            onClick={hideMenuSide}
            >
                Accueil
            </Link>
            <Link
            to={`/warm-up/list`}
            className='burgerMenu-Link'
            onClick={hideMenuSide}
            >
                Echauffements
            </Link>
            <Link
            to={`/tabata/home`}
            className='burgerMenu-Link'
            onClick={hideMenuSide}
            >
                Tabata Training
            </Link>
            <Link
            to={`/it30/home`}
            className='burgerMenu-Link'
            onClick={hideMenuSide}
            >
                Interval Training 30/30
            </Link>
            <Link
            to={`/`}
            className='burgerMenu-Link'
            onClick={hideMenuSide}
            >
                21-15-9 WOD 
            </Link>
            <Link
            to={`/666-workout/home`}
            className='burgerMenu-Link'
            onClick={hideMenuSide}
            >
                666 WOD
            </Link>
            <Link
            to={`/registration`}
            className='burgerMenu-Link'
            onClick={hideMenuSide}
            >
                Créer un compte
            </Link>
            <Link
            to={`/back-office`}
            className='burgerMenu-Link'
            onClick={hideMenuSide}
            >
                Mon tableau de bord
            </Link>
            <Link
            to={`/about-tabata`}
            className='burgerMenu-Link'
            onClick={hideMenuSide}
            >
                A propos du Tabata Training
            </Link>
            <Link
            to={`/about-me`}
            className='burgerMenu-Link'
            onClick={hideMenuSide}
            >
                A propos de moi
            </Link>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu
