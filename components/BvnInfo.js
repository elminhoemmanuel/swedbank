import React from 'react'
import { AiOutlineDown } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { toggleExp } from '../redux/actions/form';

const BvnInfo = () => {

    const { explain } = useSelector((state) => state.form);
    const dispatch = useDispatch();

    return (
        <div className="bvninfo">
            <div className="bvninfotop">
                <div className="info-left">
                    <img className="lock" src="/images/lock.svg" alt="lock icon" />
                    <p className="why">Why we need your BVN</p>
                </div>

                <div className="info-right" onClick={() => { dispatch(toggleExp()) }}>
                    <p className="show">Show</p>
                    <AiOutlineDown className="show-icon" />

                </div>
            </div>

            {
                explain &&

                <>
                    <div className="explanation">
                        <div className="exptop">
                            <p>We only need access to your:</p>
                            <div className="point">
                                <img className="check" src="/images/check.svg" alt="check icon" />
                                <p>Full Name</p>
                            </div>
                            <div className="point">
                                <img className="check" src="/images/check.svg" alt="check icon" />
                                <p>Phone Number</p>
                            </div>
                            <div className="point">
                                <img className="check" src="/images/check.svg" alt="check icon" />
                                <p>Date of Birth</p>
                            </div>
                        </div>

                        <div className="expdown">
                            <p className="check">🔐</p>
                            <p className="why">Your BVN does not give us access to your bank accounts or transactions</p>
                        </div>
                    </div>

                    
                </>


            }
        </div>
    )
}

export default BvnInfo
