import jobsData from './Content/jobsData.json';

const initState = {
    getApiUrl: 'https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs',
    passData: []
}

const Reducer = (state = initState, action) => {
    let getApiUrl = initState.getApiUrl;
    let passData = state.passData;
    let searchValues = null;
    let filterValues = null;
    if (action.type === 'GET API URL') {
        getApiUrl = action.apiUrl
        state.getApiUrl = getApiUrl;
        return state;
        
    } else if (action.type === 'SEND DATA') {
        passData = action.JobsData;
        state.passData = passData;
        return state;
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