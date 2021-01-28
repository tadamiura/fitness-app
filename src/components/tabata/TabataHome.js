import React from 'react'
import { Link } from 'react-router-dom'
import Directions from './Directions';

const TabataHome = () => {

    return (
        <div className='random-tabata component'>
            <h2>Découvrez votre circuit Tabata du jour</h2>
            <Link to='/tabata/workout' >
                <input
                className='tabata-button'
                type='button'
                value='Afficher les exercices'
                />
            </Link>
            <Directions />
        </div>
    )
}

export default TabataHome