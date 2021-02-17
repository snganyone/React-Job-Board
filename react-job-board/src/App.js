import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import JobContainer from '../src/containers/JobContainer';
import Home from '../src/components/Home';
import JobForm from '../src/components/Jobs/JobForm';
import NavMenu from '../src/components/NavMenu';
import Footer from '../src/components/Footer';
import AgencyContainer from '../src/containers/AgencyContainer';
import JobShow from '../src/components/Jobs/JobShow';

class App extends Component{
  render(){
    return(
      <div>
        <NavMenu />
        <Footer />

        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/jobs" component={JobContainer}/>
        <Route path="/job/:id" render={(routerProps) =>
          <JobShow {...routerProps}/>} />
        <Route exact path="/add-job" component={JobForm}/>
        <Route exact path="/agencies" component={AgencyContainer}/>
        </Switch>

      </div>
    )
  }
}

export default App;