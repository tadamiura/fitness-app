import React from 'react'
import DisplayExercice from './DisplayExercice'
import './Exercices.css'

class Exercices extends React.Component {
    state = {
        exercices: [],
        isLoaded: false
}

getExercices = () => {
    fetch("https://wger.de/api/v2/exercise/?format=json")
        .then(res => res.json())
        .then(res => this.setState({exercices: res, isLoaded: true}))
}
componentDidMount(){
    this.getExercices()
}

render() {

    return (
        <>
        {!this.state.isLoaded ? (<div>Loading...</div>) : (<div>
            exercice
            <div>{this.state.exercices.map(exercice => (
                <DisplayExercice exercice={exercice} key={exercice.id}/>
            ))
            }
            </div>
        </div>
        )}
        
        </>
        )
 }
}
export default Exercices