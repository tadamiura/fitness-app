import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Loader from '../Loader'

const SixSixSixStopWatch = ({ ex1, ex2 }) => {
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);
    const[display1, setDisplay1] = useState({
        exercice1: true,
        exercice2: false,
        sets: 1
    }) 

    const history = useHistory()

    const stopTimer = () => {
        setIsActive(false);
        setCounter(0);
        setSecond('00');
        setMinute('00')
    }
    
    useEffect(() => {
        let intervalId;
    
        if (isActive) {
            intervalId = setInterval(() => {
            const secondCounter = counter % 60;
            const minuteCounter = Math.floor(counter / 60);
    
            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
    
            setSecond(computedSecond);
            setMinute(computedMinute);
    
            setCounter(counter => counter + 1);
            }, 100)
        }
        return () => clearInterval(intervalId);
    }, [isActive, counter])
    
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
        <div className="stopwatch-container">
            <div className="time">
                <span className="minute">{minute}</span>
                <span>:</span>
                <span className="second">{second}</span>
            </div>
            <div className="buttons">
                <button onClick={() => setIsActive(!isActive)} className="start">
                    {isActive ? "Pause": "Start"}
                </button>
                <button onClick={stopTimer} className="reset">Reset</button>
            </div>
        </div>
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