import React from 'react'
import { Link } from 'react-router-dom'
import Directions from './Directions';

const SixSixSixHome = () => {

    return (
        <div className='random-tabata component'>
            <h2>Découvrez circuit "666" du jour</h2>
            <Link to='/666-workout/workout' >
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

export default SixSixSixHome