import React, { Component } from 'react';
import { showJob } from '../../actions/jobCreator';
import { connect } from 'react-redux';

class JobShow extends Component{
    state = {
        job: []
    }

    componentDidMount(){
        //this.props.showJob(id);
        console.log(this.props.match.params.id);
    }

    render(){
        console.log("show page")
        return(
            <div>Show Job</div>
        )
    }
}

export default connect(null, { showJob })(JobShow);