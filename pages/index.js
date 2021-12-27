import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {

    // const { step } = useSelector((state) => state.form);

    // const getStep = () =>{
    //     switch (step) {
    //         case 1:
    //             return <PageRightFirst />
        
    //         case 2:
    //             return <PageRightSecond />
        
    //         case 3:
    //             return <PageRightThird />
        
    //         default:
    //             break;
    //     }
    // }

  return (
    <>
      <Head>
        <title>Swedbank</title>
        <meta name="keywords" content="Onboardly | Homepage" />
      </Head>

      <div className=''>
        Hey Swedbank
      </div>
    </>
  )
}
