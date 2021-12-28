import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle } from "react-icons/fa"

const Stepper = () => {

    const { step } = useSelector((state) => state.form);

    return (
        <div className="p-3 grid grid-cols-5">
            <div className="flex flex-col items-center justify-center p-3">
                {
                    step > 1 ? 
                    <FaCheckCircle className="h-8 w-8 text-green-600" /> :
                    <p><span className="h-8 w-8 flex items-center justify-center bg-stepbg text-white rounded-full p-2">1</span></p>
                    
                }
                <div className="hidden md:block mt-2">
                    <p className="text-sm">Earnings</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-3">
                {
                    step > 2 ? 
                    <FaCheckCircle className="h-8 w-8 text-green-600" /> :
                    <p><span className="h-8 w-8 flex items-center justify-center bg-stepbg text-white rounded-full p-2">2</span></p>
                    
                }
                <div className="hidden md:block mt-2">
                    <p className="text-sm">Amount</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-3">
                {
                    step > 3 ? 
                    <FaCheckCircle className="h-8 w-8 text-green-600" /> :
                    <p><span className="h-8 w-8 flex items-center justify-center bg-stepbg text-white rounded-full p-2">3</span></p>
                    
                }
                <div className="hidden md:block mt-2">
                    <p className="text-sm">Duration</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-3">
                {
                    step > 4 ? 
                    <FaCheckCircle className="h-8 w-8 text-green-600" /> :
                    <p><span className="h-8 w-8 flex items-center justify-center bg-stepbg text-white rounded-full p-2">4</span></p>
                    
                }
                <div className="hidden md:block mt-2">
                    <p className="text-sm">Personal Data</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-3">
                {
                    step > 5 ? 
                    <FaCheckCircle className="h-8 w-8 text-green-600" /> :
                    <p><span className="h-8 w-8 flex items-center justify-center bg-stepbg text-white rounded-full p-2">5</span></p>
                    
                }
                <div className="hidden md:block mt-2">
                    <p className="text-sm">Summary</p>
                </div>
            </div>
            
        </div>
    )
}

export default Stepper
