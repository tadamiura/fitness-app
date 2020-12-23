import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Loader from '../Loader'
import ReactPlayer from 'react-player'

import axios from 'axios'

const ExerciceManagement = (props) => {

    const [exercice, setExercice] = useState(null)

    const getExercice = () => {
        axios.get(`/api/exercices/${props.match.params.id}`)
        .then((res) => setExercice(res.data))
    }

    const history = useHistory()

    const deleteExercice = () =>{
        axios.delete(`/api/exercices/${props.match.params.id}`)
        .then (history.push('/back-office/exercices'))
        .then((res) =>alert(`L'exercice a bien été supprimé de la liste`)         
        )}

    // eslint-disable-next-line
    useEffect(() => getExercice(), [])

    return(exercice === null ?
        <Loader />
        :
        <div className="component exercice-management">
            <h1>Visuel de l'exercice</h1>
            <span className="exercice">{exercice.name}</span>
            <ReactPlayer 
                url={exercice.url_name} 
                controls={true}
                height={180}
                width={300}
                style={{
                margin: 'auto'
            }}/>
            <button className="default-button" onClick={deleteExercice}>Supprimer l'exercice</button>
        </div>
    )
}

export default ExerciceManagement