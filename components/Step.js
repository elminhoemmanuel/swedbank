import React from 'react'

const Step = ({ count,text}) => {
    return (
        <div className="step">
            {/* Normal Step active or not */}
            <div className="step-icon">{count}</div>
            <div><p className="step-text">{text}</p></div>
        </div>
    )
}

export default Step
