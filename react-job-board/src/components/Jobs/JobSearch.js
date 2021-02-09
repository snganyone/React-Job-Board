import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

class JobSearch extends Component{
    state = {
        query: ""
    }

    handleQueryChange = event => {
        this.setState({
            query: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handlesubmit(this.state.query);
        this.setState({
            query: ""
        })
    }

    render(){
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Form onSubmit={event => this.handleSubmit(event)}>
                    <Form.Row>
                    <Col xs={6}>
                        <Form.Control placeholder="Search Term" onChange={event => this.handleQueryChange(event)} value={this.state.query}/>
                    </Col>
                    <Col>
                    <Button variant="primary" type="submit">
                        Search Jobs
                    </Button>
                    </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default JobSearch;