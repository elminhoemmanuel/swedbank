import React from 'react'

const PrimaryBtn = ({ clicked, type, btnText, addStyle }) => {
    return (
        <button type={type} onClick={clicked} className={`pri-btn ${addStyle}`}>
            {btnText}
        </button>
    )
}

export default PrimaryBtn
