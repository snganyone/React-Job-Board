import React from 'react';

const JobPage = (props) => {
    return(
    <div>
        {props.jobs.map(j => j.title)}
    </div>
    )
}

export default JobPage;