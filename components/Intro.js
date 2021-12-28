import React from 'react'
import { AiFillCaretRight } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { INCR_STEP } from '../redux/types';

const Intro = () => {

    const dispatch = useDispatch();
    const { step } = useSelector((state) => state.form);

    return (
        <div className="bg-white rounded p-4 ">
            <p className="text-sm">Completing an application helps us find the most suitable solution for you and
                make a prelimenary assessment of your solvency. Completing an application does not oblige you to sign an agreement.</p>

            <div>
                <button 
                onClick={()=>{dispatch({ type: INCR_STEP })}}
                className="focus:outline-none bg-transparent py-3 text-blue-600 flex items-center">
                    <AiFillCaretRight className="h-4 w-4" />
                    <p>Complete an application</p>
                </button>
            </div>
        </div>
    )
}

export default Intro
