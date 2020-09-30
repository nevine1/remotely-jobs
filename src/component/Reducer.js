const initState = {
    makeReq: true,
    getApiUrl: 'https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs?category=all others',
    faildReq: {
        details: '',
    },
    passData: []
}

const Reducer = (state = initState, action) => {
    let searchValues = null;
    let filterValues = null;

    if (action.type === 'MAKE REQUEST') {
        return {...state , makeReq: true };

    } else if (action.type === 'FAILD REQUEST') {
        return {...state , faildReq: {details: action.err}, makeReq: false};

    } else if (action.type === 'GET API URL') {
        return {...state , getApiUrl: action.getApiUrl , passData: []};
        
    } else if (action.type === 'SEND DATA') {
        return {...state,  passData: action.JobsData , makeReq: false };

    } else {
        return state;
    }

}

export default Reducer;