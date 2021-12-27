import React from 'react'
import { AiFillCaretRight } from "react-icons/ai"

const BreadCrumb = () => {
    return (
        <div className="picbg py-2 hidden md:flex md:px-6 lg:px-16 items-center">
            <div className="flex items-center mr-2">
                <p className="text-xs text-white">Home</p>
                <AiFillCaretRight className="h-2 w-2 text-white" />
            </div>
            <div className="flex items-center mr-2">
                <p className="text-xs text-white">Loan, Leasing</p>
                <AiFillCaretRight className="h-2 w-2 text-white" />
            </div>
            <div className="flex items-center mr-2">
                <p className="text-xs text-white">Small Loan</p>
            </div>
        </div>
    )
}

export default BreadCrumb
