import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'

import '../../App.css'

const DisplayExercice = ({ id, exercices }) =>{

    const [medias, setMedias] = useState(null)

    const getMedias = () => {
        const url = `http://localhost:8080/api/exercice/${id}/media`
        axios.get(url)
        .then((res) => {
            setMedias(res.data[0])
        }
    )
}
    useEffect(() => getMedias(), [])

    return(
        medias === null ?
        <div>Loading ...</div> 
        : 
        <div className='random-exercice' id={exercices.id}> 
        {exercices.name}
                <ReactPlayer 
                url={medias.url_name} 
                controls={true}
                height={180}
                width={320}
                style={{
                margin: 'auto'
                }}
                />
        </div>
    )
}
export default DisplayExercice