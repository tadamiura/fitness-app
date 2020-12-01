import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faHourglassStart, faStopwatch20 } from '@fortawesome/free-solid-svg-icons'
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
                    <Link to='tabata-home'
                    className='go-to-tabata'>
                    {/* <FontAwesomeIcon icon={faHeartbeat} size="4x" /> */}
                    <img src={jumping} alt="jumping-jack"></img>
                    <p>TABATA TRAINING</p>
                    </Link>
                </span>
                <span className='cards'>
                    <Link to='countdown'>
                    {/* <FontAwesomeIcon icon={faStopwatch20} size="4x" /> */}                
                    <img src={countdown} alt="countdown"></img>
                    <p>COUNTDOWN</p>
                    </Link>
                </span>
                <span className='cards'>
                    <Link to=''>
                    {/* <FontAwesomeIcon icon={faHourglassStart} size="4x" /> */}
                    <img src={pushUp} alt="pushUp"></img>
                    <p>21-15-9 WOD</p>
                    </Link>
                </span>
                <span className='cards'>
                    <Link to=''>
                    {/* <FontAwesomeIcon icon={faHourglassStart} size="4x" /> */}
                    <img src={evil} alt="evil"></img>
                    <p>666 WOD</p>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Dashboard