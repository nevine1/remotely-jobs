import jobsData from './Content/jobsData.json';

const initState = {
    passData: 'https://remotive.io/api/remote-jobs?search=front%20end'
}

const Reducer = (state = initState, action) => {
    let passData = initState.passData;
    let searchValues = null;
    let filterValues = null;
    if (action.type === 'SEND DATA') {
        passData = action.JobsData
        state.passData = passData;
        return state;
        
    } else if (action.type === 'APPLY FILTER') {
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