import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PrimaryBtn from "./PrimaryBtn";
import { setPos } from '../redux/actions/form';

const BizType = () => {

    const dispatch = useDispatch();
    const { pos } = useSelector((state) => state.form);
    useEffect(() => {
        dispatch(setPos("no"))
    }, [])

    return (
        <>
            <div>
                <p className="" style={{ marginBottom: "0.6rem" }}>Do you use POS machines for your business?</p>
            </div>
            <div className="methodbar">
                {
                    pos === "yes" ?
                        <PrimaryBtn
                            type="button"
                            btnText="Yes"
                            addStyle="focused-btn"
                            clicked={() => dispatch(setPos("yes"))}
                        /> :
                        <PrimaryBtn
                            type="button"
                            btnText="Yes"
                            addStyle="method-btn"
                            clicked={() => dispatch(setPos("yes"))}
                        />
                }


                {
                    pos === "no" ?
                        <PrimaryBtn
                            type="button"
                            btnText="No"
                            addStyle="focused-btn"
                            clicked={() => dispatch(setPos("no"))}
                        /> :
                        <PrimaryBtn
                            type="button"
                            btnText="No"
                            addStyle="method-btn"
                            clicked={() => dispatch(setPos("no"))}
                        />
                }
            </div>
        </>
    )
}

export default BizType
