import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import ReactPlayer from 'react-player'

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
        <div className="component exercice-management">
            <span className="exercice">{exercice.name}</span>
            <ReactPlayer 
                url={exercice.url_name} 
                controls={true}
                height={180}
                width={300}
                style={{
                margin: 'auto'
            }}/>
        </div>
    )
}

export default ExerciceManagement