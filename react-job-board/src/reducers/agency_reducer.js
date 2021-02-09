const agencyReducer = (state = { agencies: [], loading: false}, action) => {
    switch(action.type){
        case 'LOADING_AGENCIES':
            return {
                ...state,
                agencies: [state.agencies],
                loading: true
            }
        case 'ADD_AGENCIES':
            return{
                ...state,
                agencies: action.agencies,
                loading: false
            }
    }
}