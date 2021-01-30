import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/actionCreator';

class JobContainer extends Component{
    
    componentDidMount(){
        console.log(this.props.fetchJobs());
    }
    render(){
        return(
            <div>Job Container
                {this.props.jobs.map(x => x.title)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jobs: state.jobs,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchJobs: () => dispatch(fetchJobs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobContainer);