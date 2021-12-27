import React from 'react'
import Stepper from './Stepper'
import SwitchSteps from './SwitchSteps'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { INCR_STEP, SET_DURATION } from '../redux/types';


const Third = () => {

    const dispatch = useDispatch();
    const { duration } = useSelector((state) => state.form);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            duration: duration,
        }
    });
    const onSubmit = (data) => {
        dispatch({ type: INCR_STEP });
        dispatch({ type: SET_DURATION, payload: data.duration });
    };

    return (
        <div className="bg-white rounded">
            <Stepper />
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="py-3 px-6">
                    <div className="pb-2">
                        <label>Loan Duration ( in Months )</label>
                    </div>
                    <div>
                        <select className="p-3 w-full md:w-2/5 rounded border focus:outline-none focus:border-4 border-blue-200 focus:border-blue-500" 
                        {...register("duration", { required: true })}>
                            <option value="">Select</option>
                            <option value="3">3</option>
                            <option value="6">6</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                    {errors.duration && <p className="text-red-400 text-xs">Your Loan duration is mandatory</p>}
                </div>
                <SwitchSteps />
            </form>

        </div>
    )
}

export default Third
