import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="h-20 border-b flex items-center justify-between px-10 text-black font-semibold">
            <div className="logo font-bold text-3xl cursor-pointer">
                <Link to="/">iNotebook</Link>
            </div>
            <ul className='flex justify-center items-center space-x-10 text-xl'>
                <li className='hover:text-blue-700 cursor-pointer'> <Link to='/'>Home</Link> </li>
                <li className='hover:text-blue-700 cursor-pointer'> <Link to='/about'>About</Link> </li>
            </ul>

            <div >
                <button className='py-2 px-5 rounded-lg bg-blue-900 text-white text-lg hover:bg-blue-700 hover:text-white duration-300'>Login</button>
            </div>
        </div>
    )
}

export default Navbar
