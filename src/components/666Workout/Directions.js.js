import React from 'react'

const Directions = () => {
    return (
        <div>
            <h3>Les instructions :</h3>
            <p>Objectifs : Effectuez le meileur temps possible pour terminer le circuit</p>
            <p>Attention ! La vitesse d'exécution ne doit <span className='bold uppercase'>jamais</span> se faire au détriment de la <span className='bold uppercase'>qualité</span> de l'exécution des exercices</p>
            <p>
                Déclenchez le chrono au début du circuit<br></br>
                Arretez-le uniquement à la fin du circuit
            </p>
            <p>Réalisez <span className='bold uppercase'>6 séries</span> de <span className='bold uppercase'>6 répétitions</span> du premier exercice puis <span className='bold uppercase'>6 répétitions</span> du second</p>
            <p>Le temps de récupération est <span className='bold uppercase'>libre</span> : vous pouvez prendre une récupération quand vous le voulez pendant le circuit. Vous pouvez prendre autant de temps de récupération que vous le voulez</p>
            <p>Si vous en avez la capacité, vous pouvez effectuer le circuit sans récupération</p>
        </div>
    )
}

export default Directions   