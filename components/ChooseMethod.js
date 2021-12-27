import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PrimaryBtn from "./PrimaryBtn";
import { setMethod } from '../redux/actions/form';

const ChooseMethod = () => {

    const dispatch = useDispatch();
    const { method } = useSelector((state) => state.form);
    useEffect(() => {
        dispatch(setMethod("bvn"))
    }, [])

    return (
        <>
            <div>
                <p className="" style={{ marginBottom: "0.6rem" }}>Select a verification method</p>
            </div>

            <div className="methodbar">
                {
                    method === "bvn" ?
                        <PrimaryBtn
                            type="button"
                            btnText="BVN"
                            addStyle="focused-btn"
                            clicked={() => dispatch(setMethod("bvn"))}
                        /> :
                        <PrimaryBtn
                            type="button"
                            btnText="BVN"
                            addStyle="method-btn"
                            clicked={() => dispatch(setMethod("bvn"))}
                        />
                }


                {
                    method === "pan" ?
                        <PrimaryBtn
                            type="button"
                            btnText="Personal Account Number"
                            addStyle="focused-btn"
                            clicked={() => dispatch(setMethod("pan"))}
                        /> :
                        <PrimaryBtn
                            type="button"
                            btnText="Personal Account Number"
                            addStyle="method-btn"
                            clicked={() => dispatch(setMethod("pan"))}
                        />
                }
            </div>
        </>
    )
}

export default ChooseMethod
