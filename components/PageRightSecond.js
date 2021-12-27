import React from 'react'
import PrimaryBtn from "./PrimaryBtn"
import StepBar from './StepBar'
import { useDispatch, useSelector } from 'react-redux';
import BottomCta from './BottomCta'
import SocialHandles from './SocialHandles';

const PageRightSecond = () => {

    const { step, method } = useSelector((state) => state.form);

    return (
        <div className="right-home">
            <div className="right-top">
                <PrimaryBtn 
                    type="button"
                    btnText="Logout"
                    addStyle="red-btn"
                />
            </div>

            <StepBar />

            <div>
                <p className="current-step">Step {step}/3</p>
                <h1 className="header second-header">Social Handles</h1>
                <p className="second-explainer">Enter your business social media handles</p>
            </div>

            <SocialHandles />

            <BottomCta />

            
        </div>
    )
}

export default PageRightSecond
