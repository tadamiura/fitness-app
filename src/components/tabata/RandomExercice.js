import React from 'react'

const tabataExercices = [
    {
        name: 'push-up',
        part: 'upper',
        equipment: 'none' 
    },
    {
        name: 'squat',
        part: 'lower',
        equipment: 'none' 
    },
    {
        name: 'alternate lunge',
        part: 'lower',
        equipment: 'none' 
    },
    {
        name: 'sit-up',
        part: 'abs',
        equipment: 'none' 
    },
    {
        name: 'pull-up',
        part: 'upper',
        equipment: 'fix bar' 
    },
    {
        name: 'plank',
        part: 'abs',
        equipment: 'none' 
    },
    {
        name: 'mountain climber',
        part: 'abs',
        equipment: 'none' 
    },
    {
        name: 'swing',
        part: 'lower',
        equipment: 'dumbbell' 
    },
    {
        name: 'deadlift',
        part: 'lower',
        equipment: 'barbell' 
    },
    {
        name: 'hips thruster',
        part: 'lower',
        equipment: 'none' 
    },
    {
        name: 'bench',
        part: 'upper',
        equipment: 'barbell' 
    },
    {
        name: 'shoulder press',
        part: 'upper',
        equipment: 'barbell' 
    },
    {
        name: 'rowing',
        part: 'upper',
        equipment: 'barbell' 
    },
    {
        name: 'sumo squat',
        part: 'lower',
        equipment: 'none' 
    },
    {
        name: 'squat jump',
        part: 'lower',
        equipment: 'none' 
    },
    {
        name: 'alternate lunge jump',
        part: 'lower',
        equipment: 'none' 
    },
    {
        name: 'V-up',
        part: 'abs',
        equipment: 'none' 
    },
    {
        name: 'turkish get-up',
        part: 'abs',
        equipment: 'dumbbell' 
    },
    {
        name: 'burpee',
        part: 'abs',
        equipment: 'none' 
    }
]

class RandomExercice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            part: "",
            equipment: ""
        }
    }

    randomNumber = () => Math.floor(Math.random() * Math.floor(tabataExercices.length))

    componentDidMount = () => {
        this.getRandomTabataExercice(this.randomNumber())
    }

    getRandomTabataExercice = (number) => {
        this.setState({name: tabataExercices[number].name})
    } 



    render() {
        return(
            <div className='random-exerice'>
                {this.state.name}
            </div>
        )
    }
}

export default RandomExercice