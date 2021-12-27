import React from 'react'
import IconInput from './IconInput'

const SocialHandles = () => {
    return (
        <div>
            <div className="form-pan second-form-pan">
                <div className="left-half">
                    <p className="label"><label for="abeg" >Choose your Abeg Tag (required)</label></p>
                    <IconInput
                        type="text"
                        id="abeg"
                    />
                </div>
            </div>

            <div className="form-pan">
                <div className="left-half">
                    <p className="label"><label for="insta" >Instagram</label></p>
                    <IconInput
                        type="text"
                        id="insta"
                    />
                </div>

                <div className="right-half">
                    <p className="label"><label for="twitter" >Twitter</label></p>
                    <IconInput
                        type="select"
                        id="twitter"
                    />
                </div>
            </div>
        </div>
    )
}

export default SocialHandles
