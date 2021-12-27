import React from 'react'
import PrimaryBtn from "./PrimaryBtn"
import { useDispatch, useSelector } from 'react-redux';
import { INCR_STEP, DECR_STEP,RESET_STEP } from '../redux/types';
import Swal from 'sweetalert2'

const BottomCta = () => {

    const dispatch = useDispatch();
    const { step } = useSelector((state) => state.form);

    return (
        <div className={ step > 1 ? "right-bottom" : "right-bottom-alone"}>

            {
                step > 1 &&
                <PrimaryBtn
                    type="button"
                    btnText="Back"
                    addStyle="method-btn"
                    clicked={() => dispatch({ type: DECR_STEP })}
                />
            }

            <PrimaryBtn
                type="button"
                btnText="Continue"
                addStyle="blue-btn"
                clicked={() => {
                    if( step === 3){
                        Swal.fire({
                            title: 'Congrats',
                            text: 'Thank you for entering all your info, care to start again?',
                            icon: 'success',
                            confirmButtonText: 'OK',
                            confirmButtonColor: "#006AFF",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch({ type: RESET_STEP })
                            }
                          })
                    }else{
                        dispatch({ type: INCR_STEP })
                    }
                }}
            />
        </div>
    )
}

export default BottomCta
