import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavMenu extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Relier</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/jobs">Jobs</Nav.Link>
                        <Nav.Link href="/add-job">Post a Job</Nav.Link>
                        <Nav.Link href="/agencies">Job Agencies</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          </div>
        )
    }
}

export default NavMenu;