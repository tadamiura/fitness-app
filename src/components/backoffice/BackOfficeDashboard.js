import React from 'react'
import { Link } from 'react-router-dom'

import list from '../../img/exercices-list.png'
import users from '../../img/my-users.png'
import profil from '../../img/profil.png'

const BackOfficeDashboard = () => {
    return(
        <div className='component dashboard'>
            <h2>Bienvenue sur votre dashboard</h2>
            <div className="dashboard-menu">
                <span className='cards'>
                    <Link to='/back-office/exercices'
                    className='go-to-tabata'>
                    <img src={list} alt="list"></img>
                    <p> MES EXERCICES</p>
                    </Link>
                </span>
                <span className='cards'>
                    <Link to='/back-office'>
                    <img src={users} alt="users"></img>
                    <p>MES PRATIQUANTS</p>
                    </Link>
                </span>
                <span className='cards'>
                    <Link to='/back-office'>
                    <img src={profil} alt="my profil"></img>
                    <p>MON PROFIL</p>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default BackOfficeDashboard