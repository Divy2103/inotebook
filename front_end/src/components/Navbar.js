import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();
    return (
        <>
            <div className="h-16 border-b flex items-center justify-between px-10 text-gray-300 bg-gray-700 font-semibold">
                <div className="logo font-bold text-4xl cursor-pointer text-white">
                    <Link to="/">iNotebook</Link>
                </div>
                <ul className='flex justify-center items-center space-x-10 text-2xl'>
                    <li className={`hover:text-white cursor-pointer ${location.pathname === "/" ? 'text-white' : ''} `}> <Link to='/'>Home</Link> </li>
                    <li className={`hover:text-white cursor-pointer ${location.pathname === "/about" ? 'text-white' : ''} `}> <Link to='/about'>About</Link> </li>
                </ul>
                <div className='flex space-x-4'>
                    {/* <button ><Link className={`py-2 px-5 rounded-lg bg-gray-300 text-black text-xl hover:bg-white hover:text-black duration-300 ${location.pathname === "/login" ? 'text-black bg-white' : ''} `} to='/login'>Login</Link></button>
                        <button ><Link className={`py-2 px-5 rounded-lg bg-gray-300 text-black text-xl hover:bg-white hover:text-black duration-300 ${location.pathname === "/register" ? 'text-black bg-white' : ''} `} to='/register'>Register</Link></button> */}
                    <button ><Link className={`border-b-2 text-xl hover:text-white duration-300 ${location.pathname === "/login" ? 'text-white' : ''} `} to='/login'>Login</Link></button>
                    <button ><Link className={`border-b-2 text-xl hover:text-white duration-300 ${location.pathname === "/register" ? 'text-white' : ''} `} to='/register'>Register</Link></button>

                </div>
            </div>
        </>
    )
}

export default Navbar
