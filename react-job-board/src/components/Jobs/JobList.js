import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { deleteJob } from '../../actions/jobCreator';
import { connect } from 'react-redux';

class JobList extends Component {

    state = {
        likes: {}
      }
      handleClick = (event) => {
        let num = 1;
        let button = event.target.id;
        if(this.state.likes[button]){
          num = this.state.likes[button] +1;
        }
        this.setState({
          likes: {...this.state.likes, [button]: num}
        })
      }

    handleDelete = id => {
        this.props.deleteJob(id);
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
                            <Button>Like</Button>
                            <Link to={`/jobs/${job.id}`} id={job.id}>Job Link</Link>
                            <Button variant="danger" onClick={() => this.props.deleteJob(job.id)} id={job.id}>Delete Job</Button>
                        </Card>
                )}
            </div>
        )
    }
}


export default connect(null, {deleteJob})(JobList);
