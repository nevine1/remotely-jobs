import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { apply_Search , pass_data } from '../../Action';
import { connect } from 'react-redux';
import jobsData from '../../Content/jobsData.json';

const Form = (props) => {
    
    // Init empty object
    const searchValuesObj = {}
    
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
        // Init empty object
        const newSearchValuesObj = {};
        // Init empty array
        const itemsArray = [];
        // Check if the object is not empty
        if (searchValuesObj) {
            for (let obj in searchValuesObj) {
                // Create a propreties from newSearchValuesObj
                newSearchValuesObj[obj] = searchValuesObj[obj];
                props.state.passData.map(items => {
                    if (items[obj].toLowerCase().includes(searchValuesObj[obj].toLowerCase())) {
                        itemsArray.push(items)
                        props.pass_data(itemsArray)
                    }
                })
            }
        }
    }
    
    return (
        <div className="mt-7">
            <div className="mx-5 sm:mx-12 md:space-x-3 md:flex">
                <div className="inline-block p-2 border border-gray-500 mt-2 form-one" style={{borderRadius: '7px'}}>
                    <FaSearch className="float-left text-gray-600 mt-1 mr-2"/>
                    <input type="text" placeholder="job title" className="border-none focus:outline-none" name="requirement" onFocus={formShadwo} onBlur={hideFormShadow} onInput={(e) => {
                        searchValuesObj[e.target.name] = e.target.value
                    }}/>
                </div>
                <div className="inline-block p-2 border border-gray-500 mt-2 form-two" style={{borderRadius: '7px'}}>
                    <FaMapMarkerAlt className="float-left text-gray-600 mt-1 mr-2"/>
                    <input type="text" placeholder="City or Country" className="border-none focus:outline-none" name="location" onFocus={formShadwo} onBlur={hideFormShadow} onInput={(e) => {
                        searchValuesObj[e.target.name] = e.target.value
                    }}/>
                </div>
                <div className="mt-2 form-three">
                    <button className="text-white bg-teal-500 font-bold py-2 px-6 focus:outline-none border-none hover:bg-teal-600 font-bold" style={{borderRadius: '7px'}} onClick={applySearch}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default connect(state => {
    return {
        state
    }
}, { apply_Search , pass_data } )(Form);