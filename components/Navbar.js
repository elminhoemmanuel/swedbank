import Link from 'next/link'
import { useState } from 'react';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { FaHome, FaSearch } from 'react-icons/fa';

const Navbar = ({ activePage }) => {

    const [menuclick, setMenuClick] = useState(false);

    const handleClick = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY = 'hidden';

    }
    const handleClickMobile = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY = 'visible';
    }

    const menu = ["Everyday banking", "Cards", "Loan, Leasing", "Savings, Investments", "Pension", "Insurance"]

    return (
        <>
            {/* mobile screens vertical nav */}
            <div className={menuclick ? 'mobile-box-show flex shadow-xl flex-col lg:hidden bg-white text-black w-full h-full fixed top-0 z-50 pt-8 max-w-screen-2xl transition'
                : 'mobile-box flex shadow-xl flex-col lg:hidden bg-black text-white w-3/4 h-full fixed top-0  z-50 pt-8 max-w-screen-2xl '}>

                {/* Vertical navigation box on small screens */}
                <div className=''>
                    <div className='lg:hidden flex flex-row justify-end mb-4 px-2'>
                        <button onClick={handleClickMobile} className='block focus:outline-none outline-none' type='button'><svg className="w-8 h-8 text-black hover:text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                    </div>
                </div>

                <div className='flex lg:hidden flex-col font-bold'>
                    {
                        menu.map(item => (
                            <div onClick={handleClickMobile}>
                                <Link className='block w-full' href="/">
                                    <a className='border-t border-b border-gray-300 flex items-center justify-between w-full px-3 py-4 text-black hover:text-pink'>
                                        <p>{item}</p>
                                        <p><AiOutlineRight className="text-pink h-5 w-5" /></p>
                                    </a>
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>

            {/* Horizontal Navigation bar */}
            <nav className='w-full bg-white z-10 with-border-gradient'>
                {/* topmost nav */}
                <div className="px-4 py-1 flex items-center justify-between picbg  md:hidden">
                    <div className="flex items-center">
                        <p className="text-sm text-white hover:text-pink mr-3">Private</p>
                        <p className="text-sm text-white hover:text-pink">Business</p>
                    </div>
                    <div>
                        <p className="text-sm text-white hover:text-pink">EN</p>
                    </div>
                </div>

                {/* Middle Nav */}
                <div className="flex flex-row py-2 px-4 md:px-6 lg:px-16 justify-between items-center border-b border-gray-200">
                    <div className='flex flex-row justify-start items-center text-base'>
                        <div className='pl-0 mr-4'>
                            <Link href="/"><a><img alt="logo" src='/images/logo.jpg' className='pl-0 h-10 md:w-28 w-32' /></a>
                            </Link>
                        </div>
                        <button className="hidden md:flex items-center outline-none">
                            <p className="text-black">Private</p>
                            <p><AiOutlineDown className="text-pink h-4 w-4" /></p>
                        </button>
                    </div>
                    <div className='flex-row items-center flex'>

                        <div className='hidden lg:flex flex-row items-center font-bold'>
                            <button className="hidden md:flex items-center outline-none mr-4">
                                <p className="text-black">EN</p>
                                <p><AiOutlineDown className="text-pink h-4 w-4" /></p>
                            </button>
                            <button className="hidden md:flex items-center outline-none mr-4">
                                <p className="text-black">Become a customer</p>
                            </button>
                            <button className="hidden md:flex items-center outline-none">
                                <p><FiLogIn className="text-pink h-5 w-5 mr-2" /></p>
                                <p className="text-black">Login</p>
                            </button>
                        </div>

                        <div className='lg:hidden mr-3'>
                            <FaUserCircle className="text-black hover:text-pink h-5 w-5" />
                        </div>
                        <div className='lg:hidden'>
                            <button onClick={handleClick} className='block focus:outline-none outline-none' type='button'><svg className="w-8 h-8 text-black hover:text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                        </div>

                    </div>
                </div>

                {/* Bottom nav */}
                <div className="hidden lg:flex justify-center flex-nowrap w-full">
                    <button className="border-l border-r border-gray-200 py-4 px-6 outline-none block">
                        <FaHome className="text-black w-5 h-5" />
                    </button>
                    {
                        menu.map(item => (
                            <button className="border-r border-gray-200 py-4 px-10 outline-none block text-black hover:text-pink">
                                {item}
                            </button>
                        ))
                    }
                    <div className="border-r border-gray-200 py-4 px-6">
                        <FaSearch className="text-black hover:text-pink" />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;