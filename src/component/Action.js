export const get_api_url = (getApiUrl) => {
    const action = {
        type: 'GET API URL',
        getApiUrl
    }

    return action;
}

export const make_request = () => {
    const action = {
        type: 'MAKE REQUEST',
    }

    return action;
}

export const faild_request = (err) => {
    const action = {
        type: 'FAILD REQUEST',
        err
    }

    return action;
}

export const pass_data = (JobsData) => {
    const action = {
        type: 'SEND DATA',
        JobsData
    }

    return action;
}