import React from 'react'
import Stepper from './Stepper'
import SwitchSteps from './SwitchSteps'

const FirstStep = () => {
    return (
        <div className="bg-white rounded">
            <Stepper />
            <SwitchSteps />
        </div>
    )
}

export default FirstStep
