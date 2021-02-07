import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JobContainer from '../src/containers/JobContainer';
import Home from '../src/components/Home';
import JobForm from '../src/components/JobForm';
import NavMenu from '../src/components/NavMenu';
import Footer from '../src/components/Footer';

class App extends Component{
  render(){
    return(
      <div>
        <NavMenu />
        <Footer />
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