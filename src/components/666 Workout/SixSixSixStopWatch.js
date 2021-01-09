import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Loader from '../Loader'

const SixSixSixStopWatch = ({ ex1, ex2 }) => {
    const[display1, setDisplay1] = useState({
        exercice1: true,
        exercice2: false,
        sets: 1
    }) 

    const history = useHistory()

    const workoutManagement = () => {
        const { sets } = display1
            if(sets < 7){
                setDisplay1(({exercice1, exercice2, sets}) => ({
                    exercice1: !exercice1,
                    exercice2: !exercice2,
                    sets: sets +0.5
                }))
            }
    }


    return ex1 === null || ex2 === null 
    ?
    <div className='loader-component'>
            <Loader />
    </div>
    :(
    <div>
        <div>
            <h2>Chrono</h2>
            <button>Start</button>
        </div>
        <div>
            {display1.sets !== 7 
            ?
            `${Math.floor(display1.sets)}ème série(s)` 
            : `Et c'est terminé !`
            }
            {display1.exercice1 
            ? 
            <p>{history.location.state.ex1.name}</p> 
            : 
            <p>{history.location.state.ex2.name}</p>
            }

            {display1.sets !== 7 
            ?
            <div>
                <h2>Quand tu finis cet exercice, pousse le bouton !</h2>
                <button onClick={() => workoutManagement()}>
                    Exo Suivant ! 
                </button>
            </div>
            :
            <Link
            to={'/666-workout/workout'}>
                <button>Nouveau 666</button>
            </Link>
            }
        </div>
    </div>
    )
}

export default SixSixSixStopWatch