import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/actionCreator';

//import Jobs from '../components/Jobs';
import JobSearch from '../components/JobSearch';
import JobList from '../components/JobList';

class JobContainer extends Component{
    state = {
        results: null
    }

    componentDidMount(){
        this.props.fetchJobs()
    }

     handleSubmit = input => {
         let results = this.props.jobs.filter(job => job.title.includes(input));
         this.setState({
             results
         })
     }

     clearSearch = () => {
         this.setState({
             results: null
         })
     }

    render(){
        console.log(this.state.results);
        return(
            <div>    
                <JobSearch handlesubmit={this.handleSubmit}/>
                {this.state.results && <button onClick={this.clearSearch}>Clear</button>}
                <JobList jobs={this.state.results || this.props.jobs}/>
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