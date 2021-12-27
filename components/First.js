import React from 'react'
import Stepper from './Stepper'
import SwitchSteps from './SwitchSteps'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { INCR_STEP, SET_INCOME } from '../redux/types';


const FirstStep = () => {

    const dispatch = useDispatch();
    const { income } = useSelector((state) => state.form);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            income: income,
          }
    });
    const onSubmit = (data) => {
        dispatch({ type: INCR_STEP });
        dispatch({ type: SET_INCOME, payload: data.income});
    };

    return (
        <div className="bg-white rounded">
            <Stepper />
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="py-3 px-6">
                    <div className="pb-2">
                        <label>Your Monthly Income(€)</label>
                    </div>
                    <div>
                        <input className="p-3 w-full md:w-2/5 rounded border focus:outline-none focus:border-4 border-blue-200 focus:border-blue-500" 
                        type="number" name="income"{...register("income", { required: true, min: 500 })} />
                    </div>
                    {errors.income && <p className="text-red-400 text-xs">Your income is mandatory and must be greater than €500</p>}
                </div>
                <SwitchSteps />
            </form>

        </div>
    )
}

export default FirstStep
