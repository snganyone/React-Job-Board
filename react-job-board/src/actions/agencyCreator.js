export const fetchAgencies = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_AGENCIES' })
        fetch("http://localhost:4000/agencies")
        .then(res => {return res.json()})
        .then((data) => {
            dispatch({type: 'ADD_AGENCIES', agencies: data})
        })
    }
}