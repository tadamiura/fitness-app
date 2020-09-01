import React from 'react'

const DisplayExercice = ({ exercices }) =>{
    return(
        <div className='random-exercice' id={exercices.id}>
        {exercices.name}
        </div>
    )
}
export default DisplayExercice