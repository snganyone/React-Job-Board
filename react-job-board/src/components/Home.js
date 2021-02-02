import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Home extends Component{
    render(){
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Card className="text-center">
                    <Card.Header>Welcome to Relier</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome To Relier</Card.Title>
                        <Card.Text>
                            An online Job dedicated to help you find the perfect fit.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Home;