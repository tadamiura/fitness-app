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
        <div className='warmup component'>
            <h1>Mes échauffements</h1>
            {warmUp.map(el => 
            <div key={el.id} className='exercice'>
            <h2>{el.name}</h2>
                <div className='media'>
                    <ReactPlayer 
                        url={el.url_name} 
                        controls={true}
                        height={180}
                        width={290}
                        style={{
                        margin: 'auto'
                        }}/>
                </div>
            </div>    
            )}
        </div>
    )
}
export default WarmUpList