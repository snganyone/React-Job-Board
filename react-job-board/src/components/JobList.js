import React, { Component } from 'react';

class JobList extends Component {
    render(){
        return(
            <div>{this.props.jobs.map(job => job.title)}</div>
        )
    }
}

export default JobList;
