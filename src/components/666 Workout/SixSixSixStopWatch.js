import React from 'react'
import { useHistory } from 'react-router-dom'
import Loader from '../Loader'

const SixSixSixStopWatch = ({ ex1, ex2 }) => {
    const history = useHistory()

    return ex1 === null || ex2 === null 
    ?
    <div className='loader-component'>
            <Loader />
    </div>
    :(
        <div>
            Top chrono 
            <p>{history.location.state.ex1.name}</p>
            <p>{history.location.state.ex2.name}</p>
        </div>
    )
}

export default SixSixSixStopWatch