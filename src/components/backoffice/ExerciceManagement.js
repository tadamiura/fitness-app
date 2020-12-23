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

    const handleChange = (e) => {
        // const { name, value } = e.target
        setExercice({ ...exercice, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .put(`/api/exercices/${props.match.params.id}`, exercice)
            .then((res) => res.data)
            .then((res) => alert(`${res}, l'exercice a bien été modifié`))
            .catch((err) => alert(`erreur : ${err.response.data} `))
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

            <form onSubmit={handleSubmit}>
                <h1>Modifier l'exercice</h1>
                <div>
                    <label htmlFor='name'>Nom de l'exercice</label><br></br>
                    <input type="text"
                    name="name"
                    id="name"
                    required
                    value={exercice.name}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='url_name'>Lien Url de la vidéo</label><br></br>
                    <input type="text"
                    name="url_name"
                    id="url_name"
                    required
                    value={exercice.url_name}
                    onChange={handleChange}
                    />
                </div>
                <input type='submit' value='Valider'
                className="default-button"
                />
            </form>

            <button className="default-button" onClick={deleteExercice}>Supprimer l'exercice</button>
        </div>
    )
}

export default ExerciceManagement