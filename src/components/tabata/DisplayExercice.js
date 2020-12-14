import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import '../../App.scss'

const DisplayExercice = ({ ex1, ex2 }) =>{

    const [showCounter, setShowCounter] = useState(false);


return( ex1 === null || ex2 === null
        ?
        <div>Loading ...</div> 
        : 
        <div className='display-exercices'>
            <div className='random-exercice' id={ex1.id}> 
                <span className="exercice">{ex1.name}</span>
                <ReactPlayer 
                url={ex1.url_name} 
                controls={true}
                height={180}
                width={300}
                style={{
                margin: 'auto'
                }}/>
            </div>
            <div className='random-exercice' id={ex2.id}> 
            <span className="exercice">{ex2.name}</span>
                <ReactPlayer 
                url={ex2.url_name} 
                controls={true}
                height={180}
                width={300}
                style={{
                margin: 'auto'
                }}/>
            </div>
            <div>
            <Link to={{
                pathname: '/tabata/countdown',
                state: {ex1, ex2}
            }}>
                <input
                    className='start-tabata-button'
                    type='button'
                    value={!showCounter ? 'Start the countdown' : 'Stop the countdown'}
                    onClick={() => setShowCounter(!showCounter)}
                />
            </Link>
            <h3>Les instructions :</h3>
                <p>Pendant 4 minutes, alternez deux exercices pendant 20 secondes.</p>
                <p>A la fin de chaque exercice, prenez une pause de 10 secondes</p>
                <p>A la fin du circuit, si vous désirez poursuivre votre entraînement, récupérer 2 minutes avant de débuter le prochain circuit</p>
            </div>
        </div>
        )
    
}
export default DisplayExercice