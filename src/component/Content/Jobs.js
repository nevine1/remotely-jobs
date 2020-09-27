import React, { useEffect, useState } from 'react';
import jobsData from './jobsData.json';
import { apply_Search , apply_Filter } from '../Action';
import { connect } from 'react-redux';
import Axios from 'axios';


const Jobs = (props) => {

    // Init empty array
    let [jobsDataArr , setJobsDataArr] = useState([]);

    // jobsData.map(items => {
    //     // Push the data in empty array
    //     jobsDataArr.push(items)
    // })
    
    useEffect(() => {

        Axios.get(props.state.passData).then(res => {
            setJobsDataArr([...res.jobs])
        })
    })

    const addProps = (e) => {

        // Get job-container elements
        const jobContainer = document.querySelectorAll('.job-container')

        document.querySelectorAll('.job-container').forEach(el => {
            // Remove job-container-js class from this element
            el.classList.remove('job-container-js')

            // Remove shadow-md class from this element
            el.classList.remove('shadow-md')
        });
        
        // add job-container-js class to this element
        jobContainer[e].classList.add('shadow-md');

        // add shadow-md class to this element
        jobContainer[e].classList.add('job-container-js');
    }

    // const jobsData = props.state.passData;

    const job = jobsDataArr.map((items,index) => {
    
        return (
            <div className="cursor-pointer mt-4 hover:shadow-md job-container" key={index} onClick={() => addProps(index)}>
                <div className="p-3">
                    <div className="block sm:flex space-x-0 sm:space-x-2">
                        <div className="w-16 h-16 md:w-20 md:h-20 border border-gray-300 rounded-full">

                            <img src={`/images/${items.company_logo_url}`} className="w-full h-full rounded-full"/>
                        </div>
                        <div className="mt-1 sm:mt-0">
                            <span className="text-teal-600 font-bold capitalize">{items.company_name}</span>
                            <p className="text-lg font-bold capitalize">{items.category}</p>
                            <div className="space-x-2 text-gray-600">
                                <span className="capitalize">{items.job_type}</span>
                                <span className="capitalize">{items.candidate_required_location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 border-t-2 border-gray-300">
                        <li className="list-none text-gray-600 mt-2 ml-2 py-1 px-1 capitalize">salary <span className="text-black rounded bg-gray-200 py-1 px-3">${items.salary = 'private'}</span></li>
                        <div className="flex flex-wrap">
                            {items.tags.map((items,index) => {
                                return (
                                    <span className="capitalize text-teal-700 bg-teal-100 py-1 px-2 mt-2 ml-2 rounded" key={index} style={{background: '#31979511'}}>
                                        {items}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {job}
        </>
    )
}


export default connect(state => {
    return {
        state
    }
},null) (Jobs);