import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { FontAwesomeIcon,  } from "@fortawesome/react-fontawesome"
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
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
    // eslint-disable-next-line
    useEffect(() => getExercice(), [])

    return exercice === null ?
    <div className='loader-component'>
        <Loader />
    </div>
    : (
        <div className="exercices-list">
            <a name="top"></a>
            <h2 className="exercices-list-title">Liste actuelle des exercices</h2>
            <div className="exercices-list-name">
                <Link 
                to={`/back-office/new-exercice`} 
                className='add-exercice-link'
                >
                    <p className="exercice-name">ajouter un exercice<br></br>
                    <FontAwesomeIcon icon={faPlus} size="1x" />
                    </p>  
                </Link>
                {exercice.map(info => 
                    <Link key={info.id} 
                    to={`/back-office/exercice/${info.id}`} 
                    className='exercice-link'
                    >
                        <p className="exercice-name" id={info.id}>{info.name}<br></br>
                        <FontAwesomeIcon icon={faEdit} size="1x" />
                        </p>  
                    </Link>
                )}
                <a href='#top'>
                    <button className="default-button">Haut de page</button>
                </a>
            </div>
        </div>
    )
}

export default List