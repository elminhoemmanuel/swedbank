import React from 'react'
import Stepper from './Stepper'
import SwitchSteps from './SwitchSteps'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { INCR_STEP, SET_AMOUNT } from '../redux/types';


const Second = () => {

    const dispatch = useDispatch();
    const { income, amount } = useSelector((state) => state.form);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            amount: amount,
          }
    });
    const onSubmit = (data) => {
        dispatch({ type: INCR_STEP });
        dispatch({ type: SET_AMOUNT, payload: data.amount});
    };

    return (
        <div className="bg-white rounded">
            <Stepper />
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="py-3 px-6">
                    <div className="pb-2">
                        <label>Loan Amount(€)</label>
                    </div>
                    <div>
                        <input className="p-3 w-full md:w-2/5 rounded border focus:outline-none focus:border-4 border-blue-200 focus:border-blue-500" 
                        type="number" name="amount"{...register("amount", { required: true, min: income })} />
                    </div>
                    {errors.amount && <p className="text-red-400 text-xs">Your Loan amount is mandatory and must be greater than your previously entered income of €{income}</p>}
                </div>
                <SwitchSteps />
            </form>

        </div>
    )
}

export default Second
