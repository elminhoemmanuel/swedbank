import React, { useEffect, useState } from 'react'
import Step from './Step'
import StepActive from './StepActive'
import StepDone from './StepDone'
import { useDispatch, useSelector } from 'react-redux';
import { INCR_STEP } from '../redux/types';


const StepBar = () => {

    const { step } = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const [width, setWidth] = useState(window.innerWidth);
    const [smallScreen, setSmallScreen] = useState(false);

    const handleResize = (e) => {
        setWidth(window.innerWidth);
        if (width <= 767) {
            setSmallScreen(true)
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        // console.log(width)
    }, [width])

    return (
        <div className="stepbar">
            {/* step 1 for large screens */}
            {
                width >= 769 &&
                <div>
                    {step === 1 ? <StepActive count={1} text="Verify Account" />
                        : <div>
                            {
                                step > 1 ? <StepDone text="Verify Account" />
                                    : <Step count={1} text="Verify Account" />
                            }
                        </div>
                    }
                </div>
            }
            {/* step 1 for small screens */}
            {
                width <= 768 && step === 1 &&
                <div>
                    {step === 1 ? <StepActive count={1} text="Verify Account" />
                        : <div>
                            {
                                step > 1 ? <StepDone text="Verify Account" />
                                    : <Step count={1} text="Verify Account" />
                            }
                        </div>
                    }
                </div>
            }

            {/* step 2 for large screens */}
            {
                width >= 769 &&
                <div>
                    {step === 2 ? <StepActive count={2} text="Social Handles" />
                        : <div>
                            {
                                step > 2 ? <StepDone text="Social Handles" />
                                    : <Step count={2} text="Social Handles" />
                            }
                        </div>
                    }
                </div>
            }
            {/* step 2 for small screens */}
            {
                width <= 768 && step === 2 &&
                <div>
                    {step === 2 ? <StepActive count={2} text="Social Handles" />
                        : <div>
                            {
                                step > 2 ? <StepDone text="Social Handles" />
                                    : <Step count={2} text="Social Handles" />
                            }
                        </div>
                    }
                </div>
            }

            {/* step 3 for large screens */}
            {
                width >= 769 &&
                <div>
                    {step === 3 ? <StepActive count={3} text="Business Category" />
                        : <div>
                            {
                                step > 3 ? <StepDone text="Business Category" />
                                    : <Step count={3} text="Business Category" />
                            }
                        </div>
                    }
                </div>
            }
            {/* step 3 for small screens */}
            {
                width <= 768 && step === 3 &&
                <div>
                    {step === 3 ? <StepActive count={3} text="Business Category" />
                        : <div>
                            {
                                step > 3 ? <StepDone text="Business Category" />
                                    : <Step count={3} text="Business Category" />
                            }
                        </div>
                    }
                </div>
            }

        </div>
    )
}

export default StepBar
