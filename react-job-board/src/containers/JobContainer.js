import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/actionCreator';

class JobContainer extends Component{
    componentDidMount(){
        this.props.fetchJobs();
    }
    render(){
        return(
            <div>Job Container</div>
        )
    }
}

const mapStateToProps = state => {
    return({jobs: state.jobs})
}

export default connect(mapStateToProps, {fetchJobs})(JobContainer);