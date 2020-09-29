import jobsData from './Content/jobsData.json';

const initState = {
    getApiUrl: 'https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs?category=all others',
    makeReq: true,
    faildReq: {
        details: '',
    },
    passData: []
}

const Reducer = (state = initState, action) => {
    let makeReq = state.makeReq;
    let faildReq = state.faildReq;
    let getApiUrl = initState.getApiUrl;
    let passData = state.passData;
    let searchValues = null;
    let filterValues = null;

    if (action.type === 'MAKE REQUEST') {
        return {...state, makeReq: true };

    } else if (action.type === 'FAILD REQUEST') {
        return {...state, faildReq: {details: action.err}, makeReq: false};

    } else if (action.type === 'GET API URL') {
        return {...state, apiUrl: action.apiUrl };
        
    } else if (action.type === 'SEND DATA') {
        return {...state, passData: action.JobsData , makeReq: false };

    }
    else if (action.type === 'APPLY FILTER') {
        filterValues = action.filterValues;
        state.filterValues = filterValues
        return state;
        
    } else if (action.type === 'APPLY SEARCH') {
        searchValues = action.searchValues;
        state.searchValues = searchValues;
        return state;

    } else {
        return state;
    }

}

export default Reducer;