import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JobContainer from '../src/containers/JobContainer';
import HomeContainer from '../src/containers/HomeContainer';
import JobForm from '../src/components/JobForm';

class App extends Component{
  render(){
    return(
      <div>
        <Router>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/jobs" component={JobContainer}/>
        <Route exact path="/add-job" component={JobForm}/>
        </Router>
      </div>
    )
  }
}

export default App;