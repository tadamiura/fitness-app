import React from 'react'
import RandomExercice from './RandomExercice'
import Countdown from './Countdown'
// import Button from '../Button'


class TabataHome extends React.Component {
    state= {
        showTabataExercices : false,
        showCounter : false
    }


    handleClick = (e) => {
        this.setState({showTabataExercices: !this.state.showTabataExercices})
    }

    startClick = () => {
        this.setState({showCounter: !this.state.showCounter})
    }


    render() {
        const { showTabataExercices, showCounter } = this.state
        return(
            <div className='random-tabata'>
                <h2>Your random tabata of the day</h2>
                <h3>during 4 minutes, alterning these two exercices</h3>

                <input 
                className='tabata-button' 
                type='button' 
                value='get a new tabata traning'
                onClick={(e) => this.handleClick(e)}
                /> 
                {showTabataExercices ? (
                <p className='tabata-exercices'>First, fast as you can, do 20 seconds of <RandomExercice />Then, 10 secondes off. After, fast as you can, do 20 second of <RandomExercice />Then, 10 secondes off. Repeat this loop until your reach 4 minutes</p>
                ) : (
                <p>Are you ready ?</p>
                )}
                
                <input 
                className ='start-tabata-button'
                type ='button'
                value='Start !'
                onClick={() => this.startClick()}
                />
                {showCounter ? ( <Countdown />) : (
                <p>
                Check if you got all your equipment before to start
                </p>)}

               
            </div>
        )
    }
}

export default TabataHome