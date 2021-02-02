import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class JobList extends Component {
    render(){
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                {this.props.jobs.map(job => 
                        <Card>
                            <Card.Body>
                                <Card.Title>{job.title}</Card.Title>
                                <Card.Subtitle>{job.employer}</Card.Subtitle>
                                <Card.Text>{job.description}</Card.Text>
                            </Card.Body>
                            <Card.Link href="#">Job Link</Card.Link>
                        </Card>
                )}
            </div>
        )
    }
}

export default JobList;
