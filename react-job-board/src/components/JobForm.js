import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import { Col } from 'react-bootstrap';

class JobForm extends Component{

    state = {
        text: ''
    }

    render(){
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Form>
                    <Form.Row> 
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default JobForm;