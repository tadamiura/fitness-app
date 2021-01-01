import React from 'react'
import { Link } from 'react-router-dom'
import Directions from './Directions.js';

const TabataHome = () => {

    return (
        <div className='random-tabata component'>
            <h2>Découvrez votre circuit 30"/30" du jour</h2>
            <Link to='/it30/workout' >
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