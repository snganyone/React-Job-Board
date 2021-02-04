import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
                            <Card.Link className="text-center" href="#">Job Link</Card.Link>
                            <Button variant="danger">Delete Job</Button>
                        </Card>
                )}
            </div>
        )
    }
}

export default JobList;
