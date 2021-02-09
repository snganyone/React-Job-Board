import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAgencies } from '../actions/agencyCreator';

class AgencyContainer extends Component{
    state = {
        results: null
    }

    componentDidMount(){
        this.props.fetchAgencies()
    }

    render(){
        console.log(this.props.agency.agencies.map(a => a.name));
        return(<div>Agencies</div>)
    }
}


const mapStateToProps = state => {
    return {
        agency: state.agencies,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchAgencies: () => dispatch(fetchAgencies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgencyContainer);