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

        fetch("http://localhost:4000/jobs", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                results: data
            })
        })
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