import React from 'react'
import AbsExercices from './AbsExercices'
import LegsExercices from './LegsExercices'
import ChestExercices from './ChestExercices'
import BicepsExercices from './BicepsExercices'

class StrenghtProgram extends React.Component {
    render() {
        return (
            <div>
            <h1>Your Random Strenght Program</h1>
            <h2>For each exercice</h2>
            <h3>3 sets of 3 times for each exercice with 5 minutes of rest betweeen each set</h3>
            <h3>Weight : Use 90-95% of your 1 time maximum</h3>
            <p>Before your workout, execute a Tabata (4 minutes 20" on/ 10" off and repeat) with this Abs exercice : </p>
            <AbsExercices />
            <h2>Now your are ready to begin your strenght workout !</h2> 
            <LegsExercices />
            <ChestExercices />
            <BicepsExercices />
        </div>
        )
    }
}

export default StrenghtProgram