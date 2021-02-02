import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from '../components/Home';

class HomeContainer extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Relier</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/jobs">Jobs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Home />
            </div>
        )
    }
}

export default HomeContainer;