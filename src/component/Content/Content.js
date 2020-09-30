import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';
import Content_view from './Content_view';
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';

const Content = (props) => {
    const [loadingBoolean,setLoadingBoolean] = useState(props.state.makeReq);
    const [errorMessage,setErrorMessage] = useState(props.state.faildReq.details);

    useEffect(() => {

        setLoadingBoolean(props.state.makeReq)
        setErrorMessage(props.state.faildReq.details)
        
    },[props.state.makeReq])

    return (
        <main className="mt-8 mx-5 sm:mx-12">
            <p className="font-bold text-gray-700 text-lg">All jobs</p>
            <div className="block md:flex">
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