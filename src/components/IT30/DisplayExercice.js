import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Directions from './Directions.js'
import Loader from '../Loader'
import '../../App.scss'

const DisplayExercice = ({ ex1, ex2 }) =>{

return( ex1 === null || ex2 === null
        ?
        <div className='loader-component'>
            <Loader />
        </div>
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
                pathname: '/it30/countdown',
                state: {ex1, ex2}
            }}>
                <input
                    className='start-tabata-button'
                    type='button'
                    value="Lancer le circuit"
                />
            </Link>
            <Directions />
            </div>
        </div>
        )
    
}
export default DisplayExercice