import React from 'react'
import DisplayExercice from './DisplayExercice'
import axios from 'axios'
import './LegsExercices.css'

class LegsExercices extends React.Component {
    state = {
        exercices: [],
        isLoaded: false
}

getExercices = (number) => {
    const url = 'https://wger.de/api/v2/exercise/?muscles=2&language=2&status=2'
    axios.get(url)
        .then(res => 
            this.setState({exercices : res.data.results[number]})
        // console.log(res)
        )
    }

randomNumber = () => Math.floor(Math.random() * Math.floor(25))

      
componentDidMount(){
    this.getExercices(this.randomNumber())
}

render() {
    const {name, description, image} = this.state.exercices
    return (
        <div>
            <h1>Legs exercices</h1>
            <p>name : {name} </p>
    <p>description : {description}</p>
        </div>
        // <>
        // {/* {!this.state.isLoaded ? (<div>Loading...</div>) : (<div>
        //     exercice) */}
        //     <div>
        //         {/* {this.state.exercices.map(exercice => (
        //         <DisplayExercice exercice={exercice} key={exercice.id}/>
        //     ))
        //     } */}
        //     </div>
        // )}
        
        // </>
        )
    }
}
export default LegsExercices