export const fetchJobs = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_JOBS' })
        fetch("https://localhost:3000/jobs")
        .then(res => res.json())
        .then(data =>{
            dispatch({type: 'ADD_JOBS', data})
            })
    }
}