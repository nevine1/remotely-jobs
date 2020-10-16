import React, { useRef , useState } from 'react';
import { FaEye , FaEyeSlash } from 'react-icons/fa';

const Form = () => {

    const [showHide , setShowHide] = useState(false);
    // Get password input element
    const passInputEl = useRef();


    const showHideHandle = () => {
        // Change the boolean
        setShowHide(!showHide)
        if (showHide == true) {
            // Change type attribute
            passInputEl.current.setAttribute('type','password')
        } else {
            // Change type attribute
            passInputEl.current.setAttribute('type','text')
        }
    }


    return (
        <div className="mt-12">
            <div className="m-auto shadow-md p-5 signup-form rounded border border-gray-300">
                <p className="text-center text-2xl">Sign up</p>
                <form>
                    <div className="mt-3">
                        <label className="text-gray-600">User name</label>
                        <br />
                        <input type="text" required placeholder="Enter your name" className="focus:outline-none border-2 border-gray-300 rounded py-2 px-4 mt-2 w-full"/>
                        <span className=""></span>
                    </div>
                    <div className="mt-3">
                        <label className="text-gray-600">Email</label>
                        <br />
                        <input type="email" required placeholder="Enter your email" className="focus:outline-none border-2 border-gray-300 rounded py-2 px-4 mt-2 w-full"/>
                        <span className=""></span>
                    </div>
                    <div className="mt-3">
                        <label className="text-gray-600">Password</label>
                        <br />
                        <div className="w-full flex items-center justify-between border-2 border-gray-300 rounded py-2 px-4 mt-2">
                            <input type="password" required placeholder="Enter your password" ref={passInputEl} className="focus:outline-none border-none w-10/12"/>
                            <div className="inline-block" onClick={() => showHideHandle()}>
                                {showHide ?  <FaEyeSlash className="text-gray-500 text-2xl cursor-pointer" /> : <FaEye className="text-gray-500 text-2xl cursor-pointer" />}
                            </div>
                        </div>
                        <span className=""></span>
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="border-none focus:outline-none w-full text-center text-white bg-teal-500 hover:bg-teal-600 py-2 rounded">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;