import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { deleteJob } from '../../actions/jobCreator';
import { showJob } from '../../actions/jobCreator';
import { connect } from 'react-redux';

class JobList extends Component {

    handleDelete = id => {
        this.props.deleteJob(id);
    }

    handleShow = id => {
        this.props.showJob(id)
    }

    render(){
        console.log(this.props)
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                {this.props.jobs.map(job => 
                        <Card>
                            <Card.Body>
                                <Card.Title>{job.title}</Card.Title>
                                <Card.Subtitle>{job.employer}</Card.Subtitle>
                                <Card.Text>{job.description}</Card.Text>
                            </Card.Body>
                            <Link to={'/job'} id={job.id}>Job Link</Link>
                            <Button variant="danger" onClick={() => this.props.deleteJob(job.id)} id={job.id}>Delete Job</Button>
                        </Card>
                )}
            </div>
        )
    }
}


export default connect(null, {deleteJob, showJob})(JobList);
