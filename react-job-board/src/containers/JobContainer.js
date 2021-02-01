import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/actionCreator';

import Jobs from '../components/Jobs';

class JobContainer extends Component{
    
    componentDidMount(){
        console.log(this.props.fetchJobs());
    }
    render(){
        return(
            <div>
                Job Container
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