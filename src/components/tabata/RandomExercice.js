import React from 'react'
import DisplayExercice from './DisplayExercice'

const tabataExercices = [
    {
        id: 0,
        name: 'push-up',
        part: 'upper',
        equipment: 'none'
    },
    {
        id: 1,
        name: 'squat',
        part: 'lower',
        equipment: 'none'
    },
    {
        id: 2,
        name: 'alternate lunge',
        part: 'lower',
        equipment: 'none'
    },
    {
        id: 3,
        name: 'sit-up',
        part: 'abs',
        equipment: 'none'
    },
    {
        id: 4,
        name: 'pull-up',
        part: 'upper',
        equipment: 'fix bar'
    },
    {
        id: 5,
        name: 'plank',
        part: 'abs',
        equipment: 'none'
    },
    {
        id: 6,
        name: 'mountain climber',
        part: 'abs',
        equipment: 'none'
    },
    {
        id: 7,
        name: 'swing',
        part: 'lower',
        equipment: 'dumbbell'
    },
    {
        id: 8,
        name: 'deadlift',
        part: 'lower',
        equipment: 'barbell'
    },
    {
        id: 9,
        name: 'hips thruster',
        part: 'lower',
        equipment: 'none'
    },
    {
        id: 10,
        name: 'bench',
        part: 'upper',
        equipment: 'barbell'
    },
    {
        id: 11,
        name: 'shoulder press',
        part: 'upper',
        equipment: 'barbell'
    },
    {
        id: 12,
        name: 'rowing',
        part: 'upper',
        equipment: 'barbell'
    },
    {
        id: 13,
        name: 'sumo squat',
        part: 'lower',
        equipment: 'none'
    },
    {
        id: 14,
        name: 'squat jump',
        part: 'lower',
        equipment: 'none'
    },
    {
        id: 15,
        name: 'alternate lunge jump',
        part: 'lower',
        equipment: 'none'
    },
    {
        id: 16,
        name: 'V-up',
        part: 'abs',
        equipment: 'none'
    },
    {
        id: 17,
        name: 'turkish get-up',
        part: 'abs',
        equipment: 'dumbbell'
    },
    {
        id: 18,
        name: 'burpees',
        part: 'abs',
        equipment: 'none'
    }
]

class RandomExercice extends React.Component {
    state = {
        name: '',
        part: '',
        equipment: ''
    }

    randomNumber = () => Math.floor(Math.random() * Math.floor(tabataExercices.length))

    getRandomTabataExercice = (number) => {
        this.setState({ name: tabataExercices[number].name, equipment: tabataExercices[number].equipment, id: tabataExercices[number].id })
    }

    componentDidMount() {
        this.getRandomTabataExercice(this.randomNumber())
    }

    render() {
        const { name, equipment, id } = this.state
        return (
            <div>
                <DisplayExercice name={name} equipment={equipment} id={id} />
            </div>
        )
    }
}

export default RandomExercice