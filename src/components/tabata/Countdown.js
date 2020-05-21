import React from 'react'
import { Link } from 'react-router-dom'
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
        // const { name } = this.props
        return (
            <div className="container-countdown">
                {<div className="counter-info">
                    <h3>Time Remaining: </h3>
                    {sets === 0 ?
                        <p className="congrats-message">
                            {`Congrats this HIIT is over.
                             After each training, you must be pround of you !`}
                        </p>
                        :
                        <ul>
                            <li className="secondes">
                                {`${seconds}`}
                            </li>
                        </ul>
                    }
                    <h4>{`${sets} sets left`}</h4>
                    <div className="container-advices">{sets % 2 === 1 ?
                        <h4>Do as faster as possible the exercice</h4> :
                        <h4>Rest Time : breathe, take the control of your heartbeat</h4>
                    }
                    </div>
                </div>}
                    <Link to='/' >Back</Link>
            </div>
        )
    }
}

export default Countdown