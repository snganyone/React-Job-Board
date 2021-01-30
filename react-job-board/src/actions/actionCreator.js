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