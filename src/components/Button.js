import React from 'react'

const Button = ({onClick, name}) => {
    return (
    <button className='button' id='random-exercice-name' onClick={onClick}>{name}</button>
    )
}

export default Button