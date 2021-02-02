import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

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
            title: event.target.value
        })
    }

    render(){
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Form>
                    <Form.Row> 
                        <Col>
                            <Form.Control placeholder="Job Title" onChange={event => this.handleOnChange(event)} value={this.state.title}/>    
                        </Col>
                        <Col>
                            <Form.Control placeholder="Employer"/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Location"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Description"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Release Date"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Job Type"/>
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

export default JobForm;