import { useContext, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext';
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";


const Navbar = () => {
    const context = useContext(NoteContext);
    const { user, getUser } = context;
    let location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser()
        }
        else {
            navigate("/login")
        }
        // eslint-disable-next-line
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login")
    }


    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <>
            <div className="h-16 border-b flex items-center justify-between px-10 text-gray-300 bg-gray-700 font-semibold">
                <div className="logo font-bold text-4xl cursor-pointer text-white">
                    <Link to="/">Notes App</Link>
                </div>
                <ul className='flex justify-center items-center space-x-10 text-2xl'>
                    <li className={`hover:text-white cursor-pointer ${location.pathname === "/" ? 'text-white' : ''} `}> <Link to='/'>Home</Link> </li>
                    <li className={`hover:text-white cursor-pointer ${location.pathname === "/about" ? 'text-white' : ''} `}> <Link to='/about'>About</Link> </li>
                </ul>
                <div className='flex space-x-4'>
                    {/* <button ><Link className={`py-2 px-5 rounded-lg bg-gray-300 text-black text-xl hover:bg-white hover:text-black duration-300 ${location.pathname === "/login" ? 'text-black bg-white' : ''} `} to='/login'>Login</Link></button>
                        <button ><Link className={`py-2 px-5 rounded-lg bg-gray-300 text-black text-xl hover:bg-white hover:text-black duration-300 ${location.pathname === "/register" ? 'text-black bg-white' : ''} `} to='/register'>Register</Link></button> */}
                    {!localStorage.getItem('token') ?
                        <>
                            <button ><Link className={`border-b-2 text-xl hover:text-white duration-300 ${location.pathname === "/login" ? 'text-white' : ''} `} to='/login'>Login</Link></button>
                            <button ><Link className={`border-b-2 text-xl hover:text-white duration-300 ${location.pathname === "/register" ? 'text-white' : ''} `} to='/register'>Register</Link></button>
                        </> :
                        <div className='flex justify-center items-center space-x-3'>
                            <p className='text-xl text-white'>Welcome ! {user.name}</p>
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img className='w-10 h-10 rounded-full' src={user.profilePic} alt="" />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <NavLink
                                                    to="/profile"
                                                    className={classNames(
                                                        `${active ? "bg-gray-100" : ""}
                                    block px-4 py-2 text-sm text-gray-700 text-center`
                                                    )}
                                                >
                                                    Your Profile
                                                </NavLink>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="button"
                                                    onClick={handleLogout}
                                                    className={classNames(
                                                        `${active ? "bg-gray-100" : ""}
                                    block px-4 py-2 text-sm text-gray-700`
                                                    )}
                                                >
                                                    Sign out
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
