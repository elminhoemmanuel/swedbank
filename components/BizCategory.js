import React from 'react'
import BizType from './BizType'
import Select from './Select'

const BizCategory = () => {
    return (
        <div className="biz-wrapper">
            <div className="form-pan">
                <div className="left-half">
                    <p className="label"><label for="biztype" >Type of your business</label></p>
                    <Select
                        id="biztype"
                    />
                </div>

                <div className="right-half">
                    <p className="label"><label for="bizcat" >Business Category</label></p>
                    <Select
                        id="bizcat"
                    />
                </div>
            </div>
            
            <BizType />

        </div>
    )
}

export default BizCategory
