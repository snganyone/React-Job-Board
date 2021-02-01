import React, { Component } from 'react';

class Job extends Component{
    render(){
        const { job } = this.props;
        return(
            <div>{job.title}</div>
        )
    }
}

export default Job;