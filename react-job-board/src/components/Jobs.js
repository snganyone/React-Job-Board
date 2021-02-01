import React from 'react';
import Job from './Job';

const Jobs = props => {
    return(
        <div>
            {props.jobs.map(job => <Job job={job}/>)}
        </div>
    )
}

export default Jobs;