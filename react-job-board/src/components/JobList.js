import React, { Component } from 'react';

class JobList extends Component {
    render(){
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                {this.props.jobs.map(job => <ul><li>{job.title}</li></ul>)}
            </div>
        )
    }
}

export default JobList;
