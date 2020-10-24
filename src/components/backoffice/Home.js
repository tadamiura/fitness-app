import React, { useEffect, useState} from 'react'
import axios from 'axios'
import BurgerMenu from '../BurgerMenu'

import './Home.css'

const Home = () => {
    const [exercice, setExercice] = useState(null)
    const [mediasAndExercices, setMediasAndExercices] = useState(null)


    const getExercice = () => {
        const url = 'http://localhost:8080/api/exercices'
        axios.get(url)
        .then((res) => setExercice(res.data))
    }

    const getMediasAndExercices = () => {
        const url = 'http://localhost:8080/api/medias'
        axios.get(url)
        .then((res) => setMediasAndExercices(res.data))
    }

    useEffect(() => getExercice(), [])

    // const handleChange = (e) => {
    //     console.log(e.target)
    //     const { id, value } = e.target
    //     setExercice({ ...exercice, [id]: value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const {id,value} = e.target
    //     // setExercice()
    //     console.log(e)
    // }

    return exercice === null ?
    <div>Loading ...</div>
    : (
        <div className="exercices-list">
            <h3 className="exercices-list-title">Liste actuelle des exercices</h3>
            <ul className="exercices-list-name">
                {exercice.map(info => 
                <li className="exercice-name" id={info.id}>{info.id} : {info.name}</li>
                )}
            </ul>
            {/* <form>
                <label htmlFor='choose-exercice'>Choissisez un exercice
                    <select className="form-input" name="exercices" id="exercices" onChange={() => setExercice}>
                        {exercice.map(info => 
                        <option id={info.id} value={info.name} key={info.id} >{info.name}</option>)}
                    </select>
                </label>
                <input type='submit' value='Sélectionner' />
            </form> */}
        </div>
    )
}

export default Home