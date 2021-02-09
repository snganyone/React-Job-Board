import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

import { addJob } from '../../actions/actionCreator';
import { connect } from 'react-redux';

class JobForm extends Component{

    state = {
        title: "",
        employer: "",
        location: "",
        description: "",
        release_date: "",
        job_type: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addJob(this.state);
        this.setState({
            title: "",
            employer: "",
            location: "",
            description: "",
            release_date: "",
            job_type: ""
        })
    }

    render(){
        
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row> 
                        <Col>
                            <Form.Control placeholder="Job Title" onChange={event => this.handleOnChange(event)} value={this.state.title} name="title"/>    
                        </Col>
                        <Col>
                            <Form.Control placeholder="Employer" onChange={event => this.handleOnChange(event)} value={this.state.employer} name="employer"/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Location" onChange={event => this.handleOnChange(event)} value={this.state.location} name="location"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Description" onChange={event => this.handleOnChange(event)} value={this.state.description} name="description"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Release Date" onChange={event => this.handleOnChange(event)} value={this.state.release_date} name="release_date"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Job Type" onChange={event => this.handleOnChange(event)} value={this.state.jobType} name="job_type"/>
                        </Col>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Add Job
                    </Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {addJob})(JobForm);