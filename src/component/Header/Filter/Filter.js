import React, { useState } from 'react';
import { connect } from 'react-redux';
import { } from '../../Action';

const Filter = (props) => {

    const [showModal, setShowModal] = useState(false);
    
    // Init a useState for the salary setter
    const [rangeVal , setRangeVal] = useState(300);

    // Init a useState for the salary value
    const [Salary , setSalary] = useState('');

    // Init a useState for the Experience Level
    const [experienceLevel , setExperienceLevel] = useState('');

    // Init a useState for the job Type
    const [jobType , setJobType] = useState('');


    // open and close salary setter
    const [showSalarySetter,setShowSalarySetter] = useState(false)

    
    const setValue = (e) => {
        //Change values
        setRangeVal(e.target.value)
        setSalary(e.target.value);
    }
    

    return (
        <div>
            <div className="mt-5 w-full relative">
                <div className="mx-5 sm:overflow-x-visible overflow-x-scroll h-12 sm:h-auto sm:mx-12 flex space-x-4 relative filter-container">
                    <div className="relative">
                        <select className="text-gray-700 bg-gray-300 rounded appearance-none py-1 px-5 border-none focus:outline-none select cursor-pointer" name="jobType" onChange={(e) => {
                            setJobType(e.target.value);
                        }}>
                            <option className="hover:bg-gray-300" value="software-dev">Software Development</option>
                            <option className="hover:bg-gray-300" value="customer-support">Customer Service</option>
                            <option className="hover:bg-gray-300" value="design">Design</option>
                            <option className="hover:bg-gray-300" value="marketing">Marketing</option>
                            <option className="hover:bg-gray-300" value="devops">DevOps / Sysadmin</option>
                        </select>
                        <div className="absolute top-2 right-1 text-gray-600 pointer-events-none">
                            <svg className="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    <div className="relative">
                        <select className="text-gray-700 bg-gray-300 rounded appearance-none py-1 px-5 border-none focus:outline-none select cursor-pointer" name="experienceLevel" onChange={(e) => {
                            setExperienceLevel(e.target.value);
                        }}>
                            <option className="hover:bg-gray-300" value="">Experience Level</option>
                            <option className="hover:bg-gray-300" value="Mid Level">Mid Level</option>
                            <option className="hover:bg-gray-300" value="Entry Level">Entry Level</option>
                            <option className="hover:bg-gray-300" value="Senior Level">Senior Level</option>
                        </select>
                        <div className="absolute top-2 right-1 text-gray-600 pointer-events-none">
                            <svg className="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    <div className="relative">
                        <button className="border-none focus:outline-none text-gray-700 bg-gray-300 py-1 px-5 w-40 flex justify-between items-center rounded" onClick={() => setShowSalarySetter(!showSalarySetter)}>
                            Job Salary
                            <svg className="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </button>
                    </div>
                    <div>
                        <button className="mr-2 border-none focus:outline-none bg-teal-500 hover:bg-teal-600 text-white py-1 px-5 rounded font-bold" onClick={() => setShowModal(true)}>
                            Apply
                        </button>
                    </div>
                </div>
                {showSalarySetter ? (
                  <div className="absolute top-12 left-12 sm:left-64 bg-gray-100 shadow-md w-9/12 sm:w-64 p-4 salary-setter-container z-20">
                      <p className="font-bold text-gray-700 p-2">Set Job Salary per year</p>
                      <div className="relative w-full">
                          <input type="range" name="salary" defaultValue="300" min="5" max="300" className="w-full h-1 bg-gray-400 border-none focus:outline-none appearance-none salary-range" onChange={(e) => setValue(e)}/>
                          <span className="text-gray-700">{Number(`${rangeVal}000`).toLocaleString()}k+</span>
                          <span className="absolute left-0 h-1 bg-teal-600" style={{top: '13px',width: `${rangeVal / 3}%`}}></span>
                          <p className="float-right text-gray-700">300k+</p>
                      </div>
                      <hr className="mt-1"/>
                      <button className="border-none focus:outline-none mt-2 text-teal-600 font-bold" onClick={() => setShowSalarySetter(false)}>Cancel</button>
                  </div>
                ) : null}
            </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Notification
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-gray-600 text-lg leading-relaxed">
                      Filter is not available now.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

        </div>
    )
}

export default connect(state => {
    return {
        state
    }
} , null)(Filter);