import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';


const JobPage = (props) => {
    return(
    <div>
        <h3>Job Description</h3>
            {props.jobs.map(j => 
            <Jumbotron>
                <h4>Job Details</h4>
                <p>Job Title: {j.title}</p>
                <p>Job Employer: {j.employer}</p>
                <p>Job Location: {j.location}</p>
                <p>Description: {j.description}</p>
                <p>Posting Date: {j.release_date}</p>
                <p>Job Type: {j.job_type}</p>
            </Jumbotron>
            )}
    </div>
    )
}

export default JobPage;