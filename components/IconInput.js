import React from 'react'

const IconInput = ({ type , id }) => {
    return (
        <div className="input-box-icon">
            <input 
            className="input-icon"
            type={type}
            id={id}
            />
            <p className="atsymbol">@</p>
        </div>
    )
}

export default IconInput
