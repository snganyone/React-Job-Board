import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Home extends Component{
    render(){
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Card className="text-center">
                    <Card.Header>Relier</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome To Relier</Card.Title>
                        <Card.Text>
                            An online Job dedicated to help you find the perfect fit.
                        </Card.Text>
                        <Button variant="primary" href="/jobs">Find Jobs</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Relier helps people find jobs</Card.Footer>
                </Card>
            </div>
        )
    }
}

export default Home;