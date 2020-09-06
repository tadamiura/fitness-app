import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayExercice = ({ id, exercices }) =>{

    const [medias, setMedias] = useState(null)

    const getMedias = () => {
        const url = `http://localhost:8080/api/exercice/${id}/media`
        axios.get(url)
        .then((res) => {
            setMedias(res.data[0])
            || console.log(res.data[0])
        }
    )
}
    useEffect(() => getMedias(), [])

    return(
        medias === null ?
        <div>Loading ...</div> : 
        <div className='random-exercice' id={exercices.id}>
        {medias.media_type === "video" ?        
        <a target='blank' href={medias.url_name}>{exercices.name}</a>
        : 
        <p>{exercices.name}</p>
        }
        </div>
    )
}
export default DisplayExercice