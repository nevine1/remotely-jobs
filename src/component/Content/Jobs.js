import React, { Component } from 'react';
import { pass_data , make_request , faild_request } from '../Action';
import { connect } from 'react-redux';
import axios from 'axios';
import noImage from '../images/no-logo.png'
import Loading from '../Loading/Loading';


class Jobs extends Component {

    state = {
        // Init empty array
        jobsDataArr: []
    }

    componentDidMount() {
        // run this function
        this.props.make_request();
        // get request
        axios.get(this.props.state.getApiUrl).then(res => {
            const jobsData = this.state.jobsDataArr = res.data.jobs;
            // Update the state
            this.setState({
                jobsData
            })
            // Pass the data
            this.props.pass_data(res.data);
        }).catch(err => {
            // Pass the error message
            this.props.faild_request(err.message)
        })
    }

    addProps = (e) => {

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

    render() {
        // const jobsData = props.state.passData;
    
        const job = this.state.jobsDataArr.map((items,index) => {
        
            return (
                <div className="mt-4 hover:shadow-md job-container" key={index} onClick={() => this.addProps(index)}>
                    <div className="p-3">
                        <div className="block sm:flex space-x-0 sm:space-x-2">
                            <div className="w-20">
                                <div className="w-16 h-16 md:w-20 md:h-20 border border-gray-300 rounded-full job-logo">
                                    <img src={items.company_logo_url ? items.company_logo_url : noImage} className="w-16 h-16 md:w-20 md:h-20 rounded-full"/>
                                </div>
                            </div>
                            <div className="mt-1 ml-3 sm:ml-0 sm:mt-0">
                                <span className="text-teal-600 font-bold capitalize">{items.company_name}</span>
                                <p className="text-lg font-bold capitalize">{items.title}</p>
                                <div className="space-x-2 text-gray-600">
                                    <span className="capitalize">{items.job_type}</span>
                                    <span className="capitalize">{items.candidate_required_location}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 border-t-2 border-gray-300">
                            <button className="border border-teal-600 font-bold text-gray-600 hover:bg-teal-600 hover:text-white py-1 px-5 rounded mt-2 ml-2">
                                View details
                            </button>
                            {items.salary ? <li className="list-none text-gray-600 mt-2 ml-2 py-1 px-1 capitalize">salary <span className="text-black rounded bg-gray-200 py-1 px-3">${items.salary}</span></li> : ''}
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
                { this.state.jobsDataArr ? job : '' }
            </>
        )

    }

}


export default connect(state => {
    return {
        state
    }
},{ pass_data , make_request , faild_request}) (Jobs);