import React from 'react'
// import { useHistory } from 'react-burger-menu'
// import axios from 'axios'
import ReactPlayer from 'react-player'

import '../../App.scss'

const DisplayExercice = ({ id, exercices }) =>{

    // const token = localStorage.getItem('x-access-token')
    // const history = useHistory()

    // useEffect(() => {
    //     const url = 'http://localhost:8080/api/verify'
    //     axios.get(url, {headers : {'Authorization' : `Bearer ${token}`}})
    //     .catch(error => history.push('/register'))
    // }, [])

    return(
        exercices === null ?
        <div>Loading ...</div> 
        : 
        <div className='random-exercice' id={exercices.id}> 
            {exercices.name}
            <ReactPlayer 
            url={exercices.url_name} 
            controls={true}
            height={180}
            width={320}
            style={{
            margin: 'auto'
            }}/>
        </div>)
}
export default DisplayExercice