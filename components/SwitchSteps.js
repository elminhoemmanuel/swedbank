import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { INCR_STEP, DECR_STEP, RESET } from '../redux/types';

const SwitchSteps = () => {

    const dispatch = useDispatch();
    const { step } = useSelector((state) => state.form);

    const finish = () =>{
        alert("Congrats Your application has been sent");
        dispatch({type:RESET})
    }

    return (
        <div className="bg-gray-50 flex justify-between items-center p-3">
            {
                step > 0 && <button onClick={()=>{dispatch({ type: DECR_STEP })}}
                    className="focus:outline-none bg-pinkbg text-black px-4 py-3 rounded block"
                >
                    &#171; Back
                </button>
            }
            <button onClick={()=>{
                step < 5 ? dispatch({ type: INCR_STEP }) : finish()
            }}
                className="focus:outline-none bg-pink text-white px-4 py-3 rounded block"
            >
                
                {
                    step === 5 ? "Submit" : "Next"
                }
                 &nbsp;&#187;
            </button>
        </div>
    )
}

export default SwitchSteps
