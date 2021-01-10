import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Loader from '../Loader'

const SixSixSixStopWatch = ({ ex1, ex2 }) => {
    const[chrono, setChrono] = useState({
        seconds: 0,
        minutes: 0,
    })

    const[display1, setDisplay1] = useState({
        exercice1: true,
        exercice2: false,
        sets: 1
    }) 

    const history = useHistory()

    // const startChrono = () => {
    //     setInterval(() => {
    //         const {seconds, minutes} = chrono
    //         setChrono(({ seconds }) => ({
    //             seconds: seconds+1
    //         }))
    //         if(seconds >= 0 && seconds < 60) {
    //             setChrono(({ seconds }) => ({
    //                 seconds: seconds +1
    //             }))
    //         }
    //         if (seconds === 60) {
    //             console.log("là")
    //             setChrono(({ minutes }) => ({
    //                 minutes: minutes +1,
    //                 seconds: 0
    //             }))
    //         }
    //         console.log('seconds', chrono.seconds)
    //     }, 100)
    // }

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
        {/* <div>
            <h2>Chrono</h2>
            <button onClick={startChrono}>Start</button>
            {chrono.minutes} : {chrono.seconds}
        </div> */}
        <div className='workout-stopwatch component'>
            {display1.sets !== 7 
            ?
            <p className='workout-count-sets'><span className='sets-number'>{Math.floor(display1.sets)}</span> série(s)<br></br>{Number.isInteger(display1.sets) ? "1er exercice sur 2" : "2ème exercice sur 2"}</p>
            : <p className='workout-count-sets'>Et c'est terminé !</p>
            }

            {display1.exercice1 && display1.sets !== 7
            ? 
            <p className='workout-exercice'>{history.location.state.ex1.name}</p> 
            : 
            display1.exercice2 && display1.sets !== 7 
            ?
            <p className='workout-exercice'>{history.location.state.ex2.name}</p>
            : 
            ""
            }

            {display1.sets !== 7 
            ?
            <div className='next-exercice'>
                <h3>Expire sur la montée, inspire sur la descente</h3>
                <h2>Quand tu finis cet exercice, appuie sur le bouton !</h2>
                <button onClick={() => workoutManagement()} className='tabata-button'>
                    Exo Suivant ! 
                </button>
            </div>
            :
            <div className='next-exercice'>
                <h3>Super ! Tu peux être fier de toi !</h3>
                <h2>Respire, Reprend le contrôle de ton souffle et de ton cardio.<br></br>Relâche tes muscles</h2>
                <Link
                to={'/666-workout/workout'}
                className='tabata-button'>
                    Nouveau 666
                </Link>
            </div>
            }
        </div>
    </div>
    )
}

export default SixSixSixStopWatch