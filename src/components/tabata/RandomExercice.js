import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomExercice = () => {

    const [exercices, setExercices] = useState(null)

    const getExercices = () => {
        const url = 'http://localhost:8080/api/exercice'
        axios.get(url)
        .then((res) => {
            const random = Math.floor(Math.random() * Math.floor(res.data.length))
            setExercices(res.data[random])
            }
        )
    }

    useEffect(() => getExercices(), [])
  
    return exercices === null ?
    <p>Loading ...</p>
    :(
        <div className='random-exercice' id={exercices.id}>
            {exercices.name}
        </div>
    )

}

export default RandomExercice