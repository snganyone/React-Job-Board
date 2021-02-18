import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';


const JobPage = (props) => {
    return(
    <div>
        <h3>Job Description</h3>
            {props.jobs.map(j => 
            <Jumbotron>
                {j.title}
            </Jumbotron>
            )}
    </div>
    )
}

export default JobPage;