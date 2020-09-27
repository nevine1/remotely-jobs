import React, { useState } from 'react';
import { connect } from 'react-redux';
import { apply_Filter } from '../../Action';

const Filter = (props) => {
    
    // Init a useState for the salary setter
    const [rangeVal , setRangeVal] = useState(300);

    // Init a useState for the salary value
    const [Salary , setSalary] = useState('');

    // Init a useState for the Experience Level
    const [experienceLevel , setExperienceLevel] = useState('');

    // Init a useState for the job Type
    const [jobType , setJobType] = useState('');


    // open and close salary setter
    const toggleOpen = () => document.querySelector('.salary-setter-container')
    .classList.toggle('hidden')

    // Close salary setter
    const closeSalarySetter = () => document.querySelector('.salary-setter-container')
    .classList.add('hidden')

    // Init empty object
    const optsValueObj = {};
    
    const setValue = (e) => {
        //Change values
        setRangeVal(e.target.value)
        setSalary(e.target.value);
    }
    
    // Init empty object
    const filterValues = {}

    const applyFilter = () => {

        // Create properties from empty object
        optsValueObj.jobType = jobType;
        optsValueObj.experienceLevel = experienceLevel;
        optsValueObj.Salary = Salary;

        // Check if the object is not empty
        if (optsValueObj) {
            for (let obj in optsValueObj) {
                // Check if values of object is not empty
                if (optsValueObj[obj] !== '') {
                    // Create properties from empty object
                    filterValues[obj] = optsValueObj[obj];
                    props.apply_Filter(filterValues)
                }
            }
        }

    }

    return (
        <div className="mt-5 w-full relative">
            <div className="mx-5 sm:overflow-x-visible overflow-x-scroll h-12 sm:h-auto sm:mx-12 flex space-x-4 relative filter-container">
                <div className="relative">
                    <select className="text-gray-700 bg-gray-300 rounded appearance-none py-1 px-5 border-none focus:outline-none select cursor-pointer" name="jobType" onChange={(e) => {
                        setJobType(e.target.value);
                    }}>
                        <option className="hover:bg-gray-300" value="">Job Type</option>
                        <option className="hover:bg-gray-300" value="Full-time">Full-time</option>
                        <option className="hover:bg-gray-300" value="Part-time">Part-time</option>
                        <option className="hover:bg-gray-300" value="Internship">Internship</option>
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
                    <button className="border-none focus:outline-none text-gray-700 bg-gray-300 py-1 px-5 w-40 flex justify-between items-center rounded" onClick={toggleOpen}>
                        Job Salary
                        <svg className="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </button>
                </div>
                <div>
                    <button className="border-none focus:outline-none bg-teal-500 hover:bg-teal-600 text-white py-1 px-5 rounded font-bold" onClick={applyFilter}>
                        Apply
                    </button>
                </div>
            </div>
            <div className="absolute top-12 left-12 sm:left-64 bg-gray-100 shadow-md w-9/12 sm:w-64 p-4 hidden salary-setter-container">
                <p className="font-bold text-gray-700 p-2">Set Job Salary per year</p>
                <div className="relative w-full">
                    <input type="range" name="salary" defaultValue="300" min="5" max="300" className="w-full h-1 bg-gray-400 border-none focus:outline-none appearance-none salary-range" onChange={(e) => setValue(e)}/>
                    <span className="text-gray-700">{Number(`${rangeVal}000`).toLocaleString()}k+</span>
                    <span className="absolute left-0 h-1 bg-teal-600" style={{top: '13px',width: `${rangeVal / 3}%`}}></span>
                    <p className="float-right text-gray-700">300k+</p>
                </div>
                <hr className="mt-1"/>
                <button className="border-none focus:outline-none mt-2 text-teal-600 font-bold" onClick={closeSalarySetter}>Cancel</button>
            </div>
        </div>
    )
}

export default connect(state => {
    return {
        state
    }
} , {apply_Filter})(Filter);