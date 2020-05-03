import React from 'react'
import RandomExercice from './RandomExercice'


class TabataHome extends React.Component {

    render() {
        return(
            <div className='random-tabata'>
                <h2>Your random tabata of the day</h2>
                <h3>during 4 minutes, alterning these two exercices</h3>
                <p className='tabata-exercices'>First, fast as you can, do 20 seconds of <RandomExercice />Then, 10 secondes off. After, fast as you can, do 20 second of <RandomExercice />Then, 10 secondes off. Repeat this loop until your reach 4 minutes</p>
            </div>
        )
    }
}

export default TabataHome