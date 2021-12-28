import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumb from '../components/BreadCrumb';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';
import Fourth from '../components/Fourth';
import Summary from '../components/Summary';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import { RESET } from "../redux/types"


export default function Home() {

    const dispatch = useDispatch();
    const { step } = useSelector((state) => state.form);

    const getStep = () =>{
        switch (step) {
            case 0:
                return <Intro />

            case 1:
                return <First />
            case 2:
                return <Second />
            case 3:
                return <Third />
            case 4:
                return <Fourth />
            case 5:
                return <Summary />

            default:
                break;
        }
    }

    useEffect(() => {
        dispatch({type:RESET})
    }, [])

    return (
        <>
            <Head>
                <title>Swedbank</title>
                <meta name="keywords" content="Onboardly | Homepage" />
            </Head>

            <div class="box">
                <Navbar />
                <BreadCrumb />
                <div class="bg-pinkbg px-4 md:px-6 lg:px- py-16 h-screen">
                    <h1 className="text-pink text-xl md:text-3xl font-bold mb-4">Small Loan application</h1>
                    { getStep() }
                </div>
            </div>
        </>
    )
}
