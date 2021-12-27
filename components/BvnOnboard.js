import React from 'react'
import BvnInfo from './BvnInfo'
import Input from './Input'
import { useDispatch, useSelector } from 'react-redux';
import BottomCta from './BottomCta';

const BvnOnboard = () => {

    const { explain } = useSelector((state) => state.form);

    return (
        <>
            <form className="form">
                <p className="label"><label for="bvn" >Bank Verification Number (11-digits)</label></p>
                <Input
                    type="text"
                    id="bvn"
                />
            </form>

            <BvnInfo />

            {
                explain && <BottomCta />
            }

        </>
    )
}

export default BvnOnboard
