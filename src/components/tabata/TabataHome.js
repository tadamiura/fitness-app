import React, { useState } from 'react'
import RandomExercice from './RandomExercice'
import Countdown from './Countdown'
import './TabataHome.css'

const TabataHome = () => {
    const [showTabataExercices, setShowTabataExercices] = useState(false);
    const [showCounter, setShowCounter] = useState(false);

    console.log('showCounter & TabataExercice',showCounter, showTabataExercices)
    return(
        <div className='random-tabata'>
            <h2>Your random tabata of the day</h2>
            <h3>during 4 minutes, alterning these two exercices</h3>

            <input 
            className='tabata-button' 
            type='button' 
            value={!showTabataExercices ? 'Get a new tabata traning' : 'Refresh tabata training'}
            onClick={()=> setShowTabataExercices(!showTabataExercices)}
            /> 
            {showTabataExercices ? (
            <p className='tabata-exercices'>First, fast as you can, do 20 seconds of 
            <span className="exercice">
                <RandomExercice />
                </span>
             Then, 10 secondes off. <br></br>After, fast as you can, do 20 second of 
             <span className="exercice">
                 <RandomExercice />
                 </span>
              Then, 10 secondes off. Repeat this loop until your reach 4 minutes
              </p>
            ) : (
            <p>Are you ready ?</p>
            )}
            
            

            <input 
            className ='start-tabata-button'
            type ='button'
            value={!showCounter ? 'Start the countdown' : 'Stop the countdown'}
            onClick={()=>setShowCounter(!showCounter)}
            />
            {showCounter ? ( <Countdown />) : (
            <p>
            Check if you got all your equipment before to start
            </p>)}
        </div>
    )
}


export default TabataHome