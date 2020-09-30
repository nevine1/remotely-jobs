import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { get_api_url } from '../../Action';
import { connect } from 'react-redux';

const Form = (props) => {

    // Init empty search state
    const [search,setSearch] = useState('')

    // Init empty company state
    const [company,setCompany] = useState('')
    
    // On Focus
    const formShadwo = (e) => {
        // Get this element
        const parentEl = e.target.parentElement;
        // Add shadow-md in this element
        parentEl.classList.add('shadow-md');
        // Add border-teal-500 in this element
        parentEl.classList.add('border-teal-500');

    }

    // On Blur
    const hideFormShadow = (e) => {
        // Get this element
        const parentEl = e.target.parentElement;
        // Remove shadow-md from this element
        parentEl.classList.remove('shadow-md');
        // Remove border-teal-500 from this element
        parentEl.classList.remove('border-teal-500');
    }

    // On click
    const applySearch = () => {

        // Check if the object is not empty
        if (search || company) {
            props.get_api_url(`https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs${search}${company}`)
        }
        setSearch('')
        setCompany('')
        document.querySelectorAll('.formInput')
        .forEach(inputEl => {
            inputEl.value = ''
        })
    }
    
    return (
        <div className="mt-7">
            <div className="mx-5 sm:mx-12 md:space-x-3 md:flex">
                <div className="w-full sm:w-auto block sm:inline-block p-2 border border-gray-500 mt-2 form-one" style={{borderRadius: '7px'}}>
                    <FaSearch className="float-left text-gray-600 mt-1 mr-2"/>
                    <input type="text" placeholder="job title" className="formInput border-none focus:outline-none" onFocus={formShadwo} onBlur={hideFormShadow} onInput={(e) => {
                        setSearch(`?search=${e.target.value.toLowerCase()}`)
                    }}/>
                </div>
                <div className="w-full sm:w-auto block sm:inline-block p-2 border border-gray-500 mt-2 sm:ml-2" style={{borderRadius: '7px'}}>
                    <FaBriefcase className="float-left text-gray-600 mt-1 mr-2"/>
                    <input type="text" placeholder="Company name"  className="formInput border-none focus:outline-none" onFocus={formShadwo} onBlur={hideFormShadow} onInput={(e) => {
                        setCompany(`?company_name=${e.target.value.toLowerCase()}`)
                    }}/>
                </div>
                <div className="mt-2 form-three">
                    <button className="w-full sm:w-auto text-white bg-teal-500 font-bold py-2 px-6 focus:outline-none border-none hover:bg-teal-600 font-bold" style={{borderRadius: '7px'}} onClick={applySearch}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default connect(state => {
    return {
        state
    }
}, { get_api_url } )(Form);