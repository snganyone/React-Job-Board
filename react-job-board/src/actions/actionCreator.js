export const fetchJobs = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_JOBS' })
        fetch("http://localhost:4000/jobs")
        .then(res => {return res.json()})
        .then((data) => {
            dispatch({type: 'ADD_JOBS', jobs: data})
            })
    }
}

export const addJob = (job) => {
    return (dispatch) => {
        fetch("http://localhost:4000/jobs", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({job})
        })
        .then(res => {return res.json()})
        .then((data) => {
            dispatch({type: 'ADD_JOB', job: data})
            })
    }
}

export const deleteJob = (job) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/jobs/${job.id}`, {
            method: "DELETE",
        })
        .then(res => {return res.json()})
        .then((data) => {
            dispatch({type: 'DELETE_JOB', id: data.id})
            })
    }
}