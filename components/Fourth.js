import React from 'react'
import Stepper from './Stepper'
import SwitchSteps from './SwitchSteps'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { INCR_STEP, SET_NAME } from '../redux/types';


const Fourth = () => {

    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.form);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: name,
        }
    });
    const onSubmit = (data) => {
        dispatch({ type: INCR_STEP });
        dispatch({ type: SET_NAME, payload: data.name });
    };

    return (
        <div className="bg-white rounded">
            <Stepper />
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="py-3 px-6">
                    <div className="pb-2">
                        <label>Your Name</label>
                    </div>
                    <div>
                        <input className="p-3 w-full md:w-2/5 rounded border focus:outline-none focus:border-4 border-blue-200 focus:border-blue-500"
                            type="text" name="name"{...register("name", { required: true })} />
                    </div>
                    {errors.name && <p className="text-red-400 text-xs">Your Name is mandatory</p>}
                </div>
                <SwitchSteps />
            </form>

        </div>
    )
}

export default Fourth
