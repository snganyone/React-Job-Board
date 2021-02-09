import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAgencies } from '../actions/agencyCreator';

class AgencyContainer extends Component{
    state = {
        agencies: []
    }

    render(){
        return(<div>agencies</div>)
    }
}


const mapStateToProps = state => {
    return {
        agencies: state.jobs,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchAgencies: () => dispatch(fetchAgencies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgencyContainer);