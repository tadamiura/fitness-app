import React from 'react'
import SetCountdown from './SetCountDown'
import { Link } from 'react-router-dom'
import TotalCountdown from './TotalCountdown'

class Countdown extends React.Component {
    state = {
        minutes: 0,
        seconds: 30,
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
                    this.setState(({ sets }) => ({
                        sets: sets - 1,
                        seconds: 29
                    }))
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
            <div className="container-countdown component">
                {<div className="counter-info">
                    <h4>Temps restant : </h4>
                    {sets === 0 ?
                        <p className="congrats-message">
                            {`Congrats this HIIT is over.
                            After each training, you must be pround of you !`}
                            <SetCountdown />
                        </p>
                        :   
                            <div>
                            <p className="secondes">
                                {`${seconds}`}
                            </p>
                            <TotalCountdown />
                            </div>
                    }
                    <div className="container-advices">
                        {
                        sets === 1 || sets === 5 || sets === 9 || sets === 13 
                        ?
                        <h4>Go !<br></br> Effectuez un maximum de répétitions de l'exercice :<br></br> <span className="random-exercice">{this.props.location.state.ex2.name}</span></h4> 
                        : 
                        sets === 3 || sets === 7 || sets === 11 || sets === 15 
                        ?
                        <h4>Go !<br></br> Effectuez un maximum de répétitions de l'exercice :<br></br> <span className="random-exercice">{this.props.location.state.ex1.name}</span></h4> 
                        :
                        sets === 2 || sets === 6 || sets === 10 || sets === 14 
                        ?
                        <h4>Récupération !<br></br> Respirez, reprenez le contrôle de votre rythme cardiaque. Prochain exercice :<br></br> <span className="random-exercice">{this.props.location.state.ex2.name}</span></h4>
                        :
                        sets === 4 || sets === 8 || sets === 12 || sets === 16 
                        ?
                        <h4>Récupération !<br></br> Respirez, reprenez le contrôle de votre rythme cardiaque. Prochain exercice :<br></br> <span className="random-exercice">{this.props.location.state.ex1.name}</span></h4>
                        :
                        ""
                        }
                    </div>
                    <h4>{sets%2 === 1 ? `${(sets +1) /2} série(s) restante(s)` : `${(sets) /2} série(s) restante(s)`}</h4>
                </div>}
                <div className="container-button">
                    <Link to='/it30/home' >
                        <input type="button"
                        className="back-button"
                        value={sets === 0 ? `get a new tabata training now` : `Retour` }
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Countdown