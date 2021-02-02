import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Home extends Component{
    render(){
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                Home Page
                <Card>
                </Card>
            </div>
        )
    }
}

export default Home;