import React, { Component } from 'react';
import { showJob } from '../../actions/jobCreator';
import { connect } from 'react-redux';

class JobShow extends Component{
    state = {
        job: []
    }

    componentDidMount(){
        this.props.showJob(this.props.match.params.id);
        console.log(this.props.match.params.id);
    }

    render(){
        console.log("show page")
        return(
            <div>Show Job</div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        showJob: (id) => dispatch(showJob(id))
    }
}

export default connect(null, mapDispatchToProps)(JobShow);