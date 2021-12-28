import React from 'react'
import Stepper from "./Stepper"
import SwitchSteps from "./SwitchSteps"

const Summary = () => {
    return (
        <div className="bg-white rounded">
            <Stepper />
            <p>Summary</p>
            <SwitchSteps />
        </div>
    )
}

export default Summary
