import React from 'react'
import Stepper from './Stepper'
import SwitchSteps from './SwitchSteps'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { RESET } from '../redux/types';


const Summary = () => {

    const dispatch = useDispatch();
    const { income, amount, name, duration } = useSelector((state) => state.form);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        alert("Your data is submitted successfully")
        dispatch({ type: RESET });
    };

    return (
        <div className="bg-white rounded">
            <Stepper />
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <p className='text-sm py-3 px-6'>Please confirm your details below before submitting</p>
                <div className="py-3 px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className='text-sm'>Monthly Income</p>
                        <p className='text-xl font-bold'>{income}</p>
                    </div>
                    <div>
                        <p className='text-sm'>Loan Amount</p>
                        <p className='text-xl font-bold'>{amount}</p>
                    </div>
                    <div>
                        <p className='text-sm'>Loan Duration</p>
                        <p className='text-xl font-bold'>{duration}</p>
                    </div>
                    <div>
                        <p className='text-sm'>Your Name</p>
                        <p className='text-xl font-bold'>{name}</p>
                    </div>
                </div>
                <SwitchSteps />
            </form>

        </div>
    )
}

export default Summary
