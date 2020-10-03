const initState = {
    makeReq: true,
    getApiUrl: 'https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs?category=all others',
    faildReq: {
        details: '',
    },
    passData: [],
    jobDetails: '',
    jobUrl: ''
}

const Reducer = (state = initState, action) => {

    if (action.type === 'MAKE REQUEST') {
        return {...state , makeReq: true , faildReq:{ details: '' } , jobDetails: '' , jobUrl: ''};

    } else if (action.type === 'FAILD REQUEST') {
        return {...state , faildReq: {details: action.err}, makeReq: false};

    } else if (action.type === 'GET API URL') {
        return {...state , getApiUrl: action.getApiUrl , passData: []};
        
    } else if (action.type === 'SEND DATA') {
        return {...state,  passData: action.JobsData , makeReq: false };

    } else if (action.type === 'SHOW DETAILS') {
        return {...state , jobDetails: action.jobDetails , jobUrl: action.jobUrl }

    } else {
        return state;
    }

}

export default Reducer;