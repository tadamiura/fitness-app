import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import './Home.css'

const Home = () => {
    const [exercice, setExercice] = useState(null)
    const token = localStorage.getItem('x-access-token')
    const history = useHistory()
    
    const getExercice = () => {
        const url = 'http://localhost:8080/api/exercices/back-office'
        axios.get(url, {headers : {'Authorization' : `Bearer ${token}`}})
        .then((res) => setExercice(res.data))
        .catch(error => history.push('/auth/login'))
    }

    useEffect(() => getExercice(), [])

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
        </div>
    )
}

export default Home