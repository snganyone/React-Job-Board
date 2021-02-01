import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JobContainer from '../src/containers/JobContainer';

class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <Route exact path="/" component={JobContainer}/>
        </Router>
      </div>
    )
  }
}

export default App;