import { combineReducers } from "redux";

const rootReducer = combineReducers({
    agencies: agencyReducer,
    jobs: jobsReducer
});

export default rootReducer;

function agencyReducer(state = { agencies: [], loading: false }, action){
    switch(action.type){
        case 'LOADING_AGENCIES':
            return {
                ...state,
                agencies: [...state.agencies],
                loading: true
            }

        case 'ADD_AGENCIES':
            return{
                ...state,
                agencies: action.agencies,
                loading: false
            }

        default:
            return state;
    }
}

function jobsReducer(state = { jobs: [], loading: false }, action) {
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

        case 'SHOW_JOB':
            return {jobs: state.jobs.filter(job => job.id === action.id)}

        case 'DELETE_JOB':
            return {jobs: state.jobs.filter(job => job.id !== action.id)}

        default:
            return state;
    }
}

// const jobsReducer = (state = { jobs: [], loading: false }, action) => {
//     switch (action.type) {
//         case 'LOADING_JOBS':
//             return {
//                 ...state,
//                 jobs: [...state.jobs],
//                 loading: true
//             }

//         case 'ADD_JOBS':
//             return{
//                 ...state,
//                 jobs: action.jobs,
//                 loading: false
//             }

//         case 'ADD_JOB':
//             return{
//                 ...state,
//                 jobs: [...state.jobs, action.job]
//             }

//         case 'DELETE_JOB':
//             return {jobs: state.jobs.filter(job => job.id !== action.id)}

//         default:
//             return state;
//     }
// }

// export default jobsReducer;