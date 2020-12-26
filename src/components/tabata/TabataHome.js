import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Directions from './Directions';
import './TabataHome.css'



const TabataHome = () => {
    const [showTabataExercices, setShowTabataExercices] = useState(false);

    return (
        <div className='random-tabata component'>
            <h2>Découvrez votre circuit Tabata du jour</h2>
            <Link to='/tabata/workout' >
                <input
                className='tabata-button'
                type='button'
                value={!showTabataExercices ? 'Afficher les exercices' : 'Afficher un nouveau circuit'}
                onClick={() => setShowTabataExercices(!showTabataExercices)}
                />
            </Link>
            <Directions />
        </div>
    )
}




export default TabataHome