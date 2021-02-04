import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JobContainer from '../src/containers/JobContainer';
import Home from '../src/components/Home';
import JobForm from '../src/components/JobForm';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends Component{
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
            </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/jobs" component={JobContainer}/>
        <Route exact path="/add-job" component={JobForm}/>
        </Router>
      </div>
    )
  }
}

export default App;