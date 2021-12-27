import React from 'react'

const StepActive = ({ count,text, step }) => {
    return (
        <div className="step">
            <div className="step-icon-active">{count}</div>
            <div><p className="step-text-active">{text}</p></div>
        </div>
    )
}

export default StepActive
