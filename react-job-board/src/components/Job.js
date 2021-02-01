import React, { Component } from 'react';

class Job extends Component{
    render(){
        const { job } = this.props;
        return(
            <div>{job}</div>
        )
    }
}

export default Job;