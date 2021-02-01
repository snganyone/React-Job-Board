import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/actionCreator';

import Jobs from '../components/Jobs';
import JobSearch from '../components/JobSearch';

class JobContainer extends Component{
    componentDidMount(){
        console.log(this.props.fetchJobs());
    }

    render(){
        return(
            <div>
                Job Container
                <JobSearch />
                <Jobs jobs={this.props.jobs}/>
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