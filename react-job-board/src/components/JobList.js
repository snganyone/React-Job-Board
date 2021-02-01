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
                            </Card.Body>
                        </Card>
                )}
            </div>
        )
    }
}

export default JobList;
