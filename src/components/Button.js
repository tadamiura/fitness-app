import React from 'react'
// import'./Button.css'

const Button = (props) => {
    return (
    <button className='button' id='random-exercice-name' onClick={props.handleClick}>Submit</button>
    )
}

export default Button