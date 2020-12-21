import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import axios from 'axios'

const ExerciceManagement = (props) => {

    const [exercice, setExercice] = useState(null)

    const getExercice = () => {
        axios.get(`/api/exercices/${props.match.params.id}`)
        .then((res) => setExercice(res.data))
    }
    // eslint-disable-next-line
    useEffect(() => getExercice(), [])

    return(exercice === null ?
        <Loader />
        :
        <div>
            {exercice.name}
        </div>
    )
}

export default ExerciceManagement