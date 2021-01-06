import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../Loader'
import ReactPlayer from 'react-player'



const WarmUpList = () => {
    const [warmUp, setWarmUp] = useState(null)

    const getWarmUpList = () => {
        const url = '/api/warmups'
        axios.get(url)
        .then((res) => {
            setWarmUp(res.data)
        })
    }

    useEffect(() => getWarmUpList(), [])
    return warmUp === null ?
    <div className='loader-component'>
    <Loader />
    </div>
    :(
        <div className='component'>
            <h2>Mes échauffements</h2>
            {warmUp.map(el => 
            <div>
            <span className="exercice" key={el.id}>{el.name}</span>
            <ReactPlayer 
                url={el.url_name} 
                controls={true}
                height={180}
                width={300}
                style={{
                margin: 'auto'
                }}/>
            </div>    
            )}
        </div>
    )
}
export default WarmUpList