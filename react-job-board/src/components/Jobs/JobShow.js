import React from 'react';

export const JobShow = (props) => {
    return(
    <div>
        {props.jobs.map(job => job.title)}
    </div>
    )
}

export default JobShow;