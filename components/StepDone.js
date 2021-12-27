import React from 'react'
import { FaCheck } from "react-icons/fa"

const StepDone = ({ text }) => {
    return (
        <div className="step">
            {/* completed step */}
            <div className="step-icon-done"><FaCheck className="done-icon" /></div>
            <div><p className="step-text">{text}</p></div>
        </div>
    )
}

export default StepDone
