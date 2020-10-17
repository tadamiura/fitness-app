import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'

import '../../App.css'

const DisplayExercice = ({ id, exercices }) =>{

    return(
        exercices === null ?
        <div>Loading ...</div> 
        : 
        <div className='random-exercice' id={exercices.id}> 
            {exercices.name}
            <ReactPlayer 
            url={exercices.url_name} 
            controls={true}
            height={180}
            width={320}
            style={{
            margin: 'auto'
            }}/>
        </div>)
}
export default DisplayExercice