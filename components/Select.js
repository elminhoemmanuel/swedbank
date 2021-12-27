import React from 'react'

const Select = ({ id }) => {
    return (
        <div className="input-box">
            <select 
            className="input"
            id={id}
            >
                <option></option>
            </select>
        </div>
    )
}

export default Select
