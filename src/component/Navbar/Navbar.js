import React from 'react';
import { FaRProject } from 'react-icons/fa';

const Navbar = () => {

    const showMenu = () => {
        document.querySelector('.menu-container')
        .classList.remove('hidden')
    }

    const hideMenu = () => {
        document.querySelector('.menu-container')
        .classList.add('hidden')
    }

    return (
        <nav className="overflow-hidden">
            <div className="mx-8 sm:mx-12 mt-4">
                <div className="inline-block text-teal-600 text-4xl float-left">
                    <a href="/" className="no-underline">
                        <span className="flex">
                            <FaRProject className="-mt-3"/>
                            <span className="text-xl ml-px">emote</span>
                        </span>
                    </a>
                </div>
                <div className="sm:flex justify-between">
                    <div className="hidden sm:block sm:ml-12 fixed z-50 top-0 left-0 right-0 bg-white w-full h-full sm:w-auto sm:h-auto sm:relative menu-container">
                        <div className="text-right mr-8 sm:hidden">
                            <div className="inline-block relative h-12">
                                <div className="inline-block cursor-pointer mr-3" onClick={hideMenu}>
                                    <span className="block h-5 mt-1 bg-gray-600 transform rotate-45 absolute" style={{width: '2px'}}></span>
                                    <span className="block h-5 mt-1 bg-gray-600 transform -rotate-45 absolute" style={{width: '2px'}}></span>
                                </div>
                            </div>
                        </div>
                        <ul className="p-0 m-0 list-none block text-lg text-gray-700 space-y-4 space-x-0 mx-8 sm:mx-0 sm:space-x-4 sm:space-y-0 sm:flex">
                            <li className="sm:border-b-2 border-teal-600"><a href="#">Find jobs</a></li>
                            <li><a href="#">Company reviews</a></li>
                            <li><a href="#">Find salaries</a></li>
                        </ul>
                    </div>
                    <div className="float-right">
                        <div className="flex space-x-4 sm:space-x-0">
                            <li className="list-none font-bold text-gray-700 sm:text-teal-600"><a href="#">Sign in</a></li>
                            <div className="inline-block cursor-pointer sm:hidden" onClick={showMenu}>
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