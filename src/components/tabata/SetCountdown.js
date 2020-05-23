import React from 'react'
import './SetCountdown.css'


class SetCountdown extends React.Component {
    state = {
        minutes: 1,
        seconds: 30,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
          const { seconds, minutes } = this.state
          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1
            }))
          }
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(this.myInterval)
            } else {
              this.setState(({ minutes }) => ({
                minutes: minutes - 1,
                seconds: 59
              }))
            }
          }
        }, 1000)
      }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render(){
        const { minutes, seconds } = this.state
        return(
            <div className="set-countdown">
                Rest time before to start a new workout : 
                <h4>{`${minutes} min ${seconds} sec left`}</h4> 
            </div>
        )
    }
}

    export default SetCountdown
