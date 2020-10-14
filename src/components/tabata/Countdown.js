import React from 'react'
import SetCountdown from './SetCountdown'
import { Link } from 'react-router-dom'
// import DisplayExercice from './DisplayExercice'
import './Countdown.css'

class Countdown extends React.Component {
    state = {
        minutes: 0,
        seconds: 20,
        sets: 15
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, sets } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {

                if (sets === 0) {
                    clearInterval(this.clearInterval)
                } else {
                    if (sets % 2 === 0) {
                        this.setState(({ sets }) => ({
                            sets: sets - 1,
                            seconds: 20
                        }))
                    } else {
                        this.setState(({ sets }) => ({
                            sets: sets - 1,
                            seconds: 10
                        }))
                    }
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { seconds, sets } = this.state
        return (
            <div className="container-countdown">
                {<div className="counter-info">
                    <h3>Time Remaining: </h3>
                    {sets === 0 ?
                        <p className="congrats-message">
                            {`Congrats this HIIT is over.
                             After each training, you must be pround of you !`}
                             <SetCountdown />
                        </p>
                        :
                            <p className="secondes">
                                {`${seconds}`}
                            </p>
                    }
                    <h4>{sets === !0 && `${sets} sets left`}</h4>
                    <div className="container-advices">{sets % 2 === 1 ?
                        <h4>Do as faster as possible the exercice {this.props.name}</h4> :
                        <h4>Rest Time : breathe, take the control of your heartbeat</h4>
                    }
                    </div>
                </div>}
                <div className="container-button">
                    <Link to='/' >
                        <input type="button"
                        className="back-button"
                        value={sets === 0 ? `get a new tabata training now` : `Back` }
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Countdown