import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class HomeContainer extends Component{
    render(){
        return(
            <div>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">Relier</Navbar.Brand>
                </Navbar>
            Home Container
            </div>
        )
    }
}

export default HomeContainer;