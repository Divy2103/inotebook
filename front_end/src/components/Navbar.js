import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();

    return (
        <div className="h-20 border-b flex items-center justify-between px-10 text-gray-400 bg-black font-semibold">
            <div className="logo font-bold text-4xl cursor-pointer text-white">
                <Link to="/">iNotebook</Link>
            </div>
            <ul className='flex justify-center items-center space-x-10 text-2xl'>
                <li className={`hover:text-white cursor-pointer ${location.pathname === "/" ? 'text-white' : ''} `}> <Link to='/'>Home</Link> </li>
                <li className={`hover:text-white cursor-pointer ${location.pathname === "/about" ? 'text-white' : ''} `}> <Link to='/about'>About</Link> </li>
            </ul>

            <div >
                <button className='py-2 px-5 rounded-lg bg-gray-300 text-black text-xl hover:bg-white hover:text-black duration-300'>Login</button>
            </div>
        </div>
    )
}

export default Navbar
