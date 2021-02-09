import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAgencies } from '../actions/agencyCreator';

class AgencyContainer extends Component{
    render(){
        return(<div>agencies</div>)
    }
}


const mapDispatchToProps = dispatch => {
    return{
        fetchAgencies: () => dispatch(fetchAgencies())
    }
}

export default connect(null, mapDispatchToProps)(AgencyContainer);