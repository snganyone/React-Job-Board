import React, { Component } from 'react';

class JobSearch extends Component{
    state = {
        query: "",
        results: []
    }

    handleQueryChange = event => {
        this.setState({
            query: event.target.value
        });
    }


    handleSubmit = event => {
        event.preventDefault();
        this.props.handlesubmit(this.state.query);
    }

    render(){
        console.log(this.state.results);
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Enter a Search Term:</label><br></br>
                    <input type="text" onChange={event => this.handleQueryChange(event)} value={this.state.query}/><br></br>
                    <input type="submit" />
                </form>
                {this.state.query}
            </div>
        )
    }
}

export default JobSearch;