import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './TabataHome.css'



const TabataHome = () => {
    const [showTabataExercices, setShowTabataExercices] = useState(false);

    return (
        <div className='random-tabata'>
            <h2>Découvrez votre circuit Tabata du jour</h2>
            <Link to='/tabata/workout' >
                <input
                className='tabata-button'
                type='button'
                value={!showTabataExercices ? 'Afficher les exercices' : 'Afficher un nouveau circuit'}
                onClick={() => setShowTabataExercices(!showTabataExercices)}
                />
            </Link>
            <h3>Les instructions :</h3>
            <p>Pendant 4 minutes, alternez deux exercices pendant 20 secondes.</p>
            <p>A la fin de chaque exercice, prenez une pause de 10 secondes</p>
            <p>A la fin du circuit, si vous désirez poursuivre votre entraînement, récupérer 2 minutes avant de débuter le prochain circuit</p>
        </div>
    )
}




export default TabataHome