const jobsReducer = (state = { jobs: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_JOBS':
            return {
                ...state,
                jobs: [...state.jobs],
                loading: true
            }

        case 'ADD_JOBS':
            return{
                ...state,
                jobs: action.jobs,
                loading: false
            }

        case 'ADD_JOB':
            return{
                ...state,
                jobs: [...state.jobs, action.job]
            }

        case 'DELETE_JOB':
            return {jobs: state.jobs.filter(job => job.id !== action.id)}

        default:
            return state;
    }
}

export default jobsReducer;