import React, { useEffect, useState } from 'react'
import DisplayExercice from './DisplayExercice'
import axios from 'axios'

const Workout = () => {

    const [exercices, setExercice] = useState({
        ex1: null,
        ex2: null
    })
    
    const [ex1, setEx1] = useState(null)
    const [ex2, setEx2] = useState(null)

    const getExercices = () => {
        const url = '/api/exercices'
        axios.get(url)
        .then((res) => { 
            const random1 = Math.floor(Math.random() * Math.floor(res.data.length))
            const random2 = Math.floor(Math.random() * Math.floor(res.data.length))
            setExercice({ex1: res.data[random1], ex2: res.data[random2]})
            setEx1(res.data[random1])
            setEx2(res.data[random2])
            }
        )
    }

    useEffect(() => getExercices(), [])

     return ex1 === null || ex2 === null 
        ?
        <div className='display-exercice'>Loading ...</div>
        :(
            <div>
                <DisplayExercice ex1={ex1} ex2={ex2} />
            </div>
        )
}

export default Workout