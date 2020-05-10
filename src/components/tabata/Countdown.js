import React from 'react'

class Countdown extends React.Component {
    state = {
        minutes: 0,
        seconds: 20,
        sets: 15
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes, sets } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (sets === 0) {
                    clearInterval(this.clearInterval)
                } else {
                    if (sets%2 === 0){
                        this.setState(({sets}) => ({
                            sets: sets -1,
                            seconds: 20
                        }))
                    } else {
                        this.setState(({sets}) => ({
                            sets: sets -1,
                            seconds: 10
                        }))
                    }
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds, sets } = this.state
        return (
            <div>
                {<div className='counter-info'>Time Remaining: 
                <p>{`${sets} sets left`}</p>
                <p>{sets === 0 ? 
                `Congrats this HIIT is over. After each training, You can be pround of you !`
                :`${seconds} sec`}</p>
                </div>}
            </div>
        )
    }
}

export default Countdown