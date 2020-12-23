import React from 'react'
import { Link } from 'react-router-dom'

import jumping from '../img/jumping.png'
import countdown from '../img/countdown.png'
import pushUp from '../img/pushUp.png'
import evil from '../img/666.png'


const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Select the type of workout</h2>
            <div className="dashboard-menu">
                <span className='cards'>
                    <Link to='/tabata/home'
                    className='go-to-tabata'>
                    <img src={jumping} alt="jumping-jack"></img>
                    <p>TABATA TRAINING</p>
                    </Link>
                </span>
                <span className='cards'>
                    <Link to=''>
                    <img src={countdown} alt="countdown"></img>
                    <p>COUNTDOWN</p>
                    </Link>
                </span>
                <span className='cards'>
                    <Link to=''>
                    <img src={pushUp} alt="pushUp"></img>
                    <p>21-15-9 WOD</p>
                    </Link>
                </span>
                <span className='cards'>
                    <Link to='back-office'>
                    <img src={evil} alt="evil"></img>
                    <p>666 WOD</p>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Dashboard