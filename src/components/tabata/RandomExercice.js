import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayExercice from './DisplayExercice'

const RandomExercice = () => {

    const [exercices, setExercices] = useState(null)

    const getExercices = () => {
        const url = 'http://localhost:8080/api/exercices'
        axios.get(url)
        .then((res) => {
            const random = Math.floor(Math.random() * Math.floor(res.data.length))
            setExercices(res.data[random])
            }
        )
    }

    useEffect(() => getExercices(), [])
  
    return exercices === null ?
    <div className='display-exercice'>Loading ...</div>
    :(
        <DisplayExercice id={exercices.id} exercices={exercices} />
    )

}

export default RandomExercice