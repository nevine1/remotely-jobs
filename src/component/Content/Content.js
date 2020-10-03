import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';
import Content_view from './Content_view';
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';

const Content = (props) => {
    // Create a state conetain a boolean from the state
    const [loadingBoolean,setLoadingBoolean] = useState(props.state.makeReq);
    // Create a state conetain a error message from the state
    const [errorMessage,setErrorMessage] = useState(props.state.faildReq.details);
    // Create a state conetain the jobs count from the state
    const [jobCount,setJobCount] = useState(props.state.passData);

    useEffect(() => {

        // Upate the state
        setLoadingBoolean(props.state.makeReq)
        setErrorMessage(props.state.faildReq.details)
        
    },[props.state.makeReq])
    
    useEffect(() => {
        setJobCount(props.state.passData)
    },[props.state.passData])

    return (
        <main className="mt-8 mx-5 sm:mx-12">
            {jobCount['job-count'] ? <p className="font-bold text-gray-700 text-lg">{jobCount['job-count']} jobs available</p> : ''}
            <div className="block md:flex justify-between">
                <div className="jobs-container">
                <Jobs />
                </div>
                <Content_view />
            </div>
            { loadingBoolean ? <Loading /> : '' }
            <p className="text-center text-xl" style={{color: '#ff0000'}}>
                {errorMessage}
            </p>
        </main>
    )
}

export default connect(state => {
    return {
        state
    }
},null)(Content);