import React, { useState, useEffect } from 'react';
import { FaRProject } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [openMenu , setOpenMenu] = useState(true);

    return (
        <nav className="overflow-hidden relative z-20">
            <div className="mx-8 sm:mx-12 mt-4">
                <div className="inline-block text-teal-600 text-4xl float-left">
                    <NavLink to="/" className="no-underline">
                        <span className="flex">
                            <FaRProject className="-mt-3"/>
                            <span className="text-xl ml-px">emote</span>
                        </span>
                    </NavLink>
                </div>
                <div className="sm:flex justify-between">
                    <div className={`sm:block sm:ml-12 fixed z-50 top-0 left-0 right-0 bg-white w-full h-full sm:w-auto sm:h-auto sm:relative menu-container ${openMenu ? 'hidden' : ''}`}>
                        <div className="text-right mr-8 sm:hidden">
                            <div className="inline-block relative h-12">
                                <div className="float-right mt-4" onClick={() => setOpenMenu(true)}>
                                    <div className="flex justify-center w-6 h-6 cursor-pointer">
                                        <span className="block h-5 mt-1 bg-gray-600 transform rotate-45 absolute" style={{width: '2px'}}></span>
                                        <span className="block h-5 mt-1 bg-gray-600 transform -rotate-45 absolute" style={{width: '2px'}}></span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <ul className="p-0 m-0 list-none block text-lg text-gray-700 space-y-4 space-x-0 mx-8 sm:mx-0 sm:space-x-4 sm:space-y-0 sm:flex">
                            <li className=""><NavLink to="/remotely-jobs"  onClick={() => setOpenMenu(true)}>Find jobs</NavLink></li>
                            <li><a href="#"  onClick={() => setOpenMenu(true)}>Company reviews</a></li>
                            <li><NavLink to="/salaries"  onClick={() => setOpenMenu(true)}>Find salaries</NavLink></li>
                        </ul>
                    </div>
                    <div className="float-right">
                        <div className="flex space-x-4 sm:space-x-0">
                            <li className="list-none font-bold py-px px-3 sm:px-0 sm:py-0 text-white sm:text-teal-600 bg-teal-500 hover:bg-teal-600 sm:hover:bg-transparent sm:bg-transparent rounded"><NavLink to="/signup">Sign in</NavLink></li>
                            <div className="inline-block cursor-pointer sm:hidden" onClick={() => setOpenMenu(false)}>
                                <span className="w-7 mt-1 bg-gray-600 block" style={{height: '3px'}}></span>
                                <span className="w-7 mt-1 bg-gray-600 block" style={{height: '3px'}}></span>
                                <span className="w-7 mt-1 bg-gray-600 block" style={{height: '3px'}}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;