import React from 'react'
// import'./Button.css'

const Button = (handleClick) => {
    return (
    <button className='button' id='random-exercice-name' onClick={
        (e)=> handleClick(e)
    }>Get a new Tabata training</button>
    )
}

export default Button