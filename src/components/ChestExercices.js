import React from 'react'
import DisplayExercice from './DisplayExercice'
import axios from 'axios'
import './ChestExercices.css'

class ChestExercices extends React.Component {
    state = {
        exercices: [],
        isLoaded: false
}

getExercices = (number) => {
    const url = 'https://wger.de/api/v2/exercise/?muscles=4&language=2&status=2'
    axios.get(url)
        .then(res => 
            this.setState({exercices : res.data.results[number]})
        )
    }

randomNumber = () => Math.floor(Math.random() * Math.floor(15))

      
componentDidMount(){
    this.getExercices(this.randomNumber())
}

render() {
    const {name, description, image} = this.state.exercices
    return (
        <div>
            <h1>Chest exercices</h1>
            <p>name : {name} </p>
    <p>description : {description}</p>
        </div>
        )
    }
}
export default ChestExercices