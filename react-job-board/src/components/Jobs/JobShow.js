import React, { Component } from 'react';
import { showJob } from '../../actions/jobCreator';
import { connect } from 'react-redux';
import JobPage from './JobPage';

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
        console.log(this.state)
        return(
            <div>
                <JobPage jobs={this.props.job.jobs}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        job: state.jobs
    }
}

const mapDispatchToProps = dispatch => {
    return{
        showJob: (id) => dispatch(showJob(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobShow);