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
        console.log(this.state)
        return(
            <div>
                {this.props.job.jobs.map(j => j.title)}
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