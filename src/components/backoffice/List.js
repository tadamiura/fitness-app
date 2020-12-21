import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Loader from '../Loader'
import axios from 'axios'

const List = () => {
    const [exercice, setExercice] = useState(null)
    const token = localStorage.getItem('x-access-token')
    const history = useHistory()
    
    const getExercice = () => {
        const url = '/api/exercices/back-office'
        axios.get(url, {headers : {'Authorization' : `Bearer ${token}`}})
        .then((res) => setExercice(res.data))
        .catch(error => history.push('/auth/login'))
    }

    useEffect(() => getExercice())

    return exercice === null ?
    <div className='loader-component'>
        <Loader />
    </div>
    : (
        <div className="exercices-list">
            <h2 className="exercices-list-title">Liste actuelle des exercices</h2>
            <div className="exercices-list-name">
                {exercice.map(info => 
                    <Link key={info.id} 
                    to={`/back-office/exercice/${info.id}`} 
                    className='exercice-link'
                    >
                        <p className="exercice-name" id={info.id}>{info.name}</p>  
                    </Link>
                )}
            </div>
        </div>
    )
}

export default List