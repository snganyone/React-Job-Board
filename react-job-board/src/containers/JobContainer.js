import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/actionCreator';

//import Jobs from '../components/Jobs';
import JobSearch from '../components/JobSearch';
import JobList from '../components/JobList';

class JobContainer extends Component{
    state = {
        results: []
    }

    handleSubmit = input => {
        let url = new URL("http://localhost:4000/jobs");
        url.search = new URLSearchParams({query: input});

        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                results: data
            })
        })
    }

    render(){
        console.log(this.state.results);
        return(
            <div>
                <JobSearch handlesubmit={this.handleSubmit}/>
                <JobList jobs={this.state.results}/>
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