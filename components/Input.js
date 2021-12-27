import React from 'react'

const Input = ({ type , id }) => {
    return (
        <div className="input-box">
            <input 
            className="input"
            type={type}
            id={id}
            />
        </div>
    )
}

export default Input
