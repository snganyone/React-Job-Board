import React, { Component } from 'react';

class JobSearch extends Component{
    state = {
        query: ""
    }

    handleQueryChange = event => {
        this.setState({
            query: event.target.value
        });
    }

    handleSubmit = input => {
        fetch("http://localhost:4000/jobs", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                query: data
            })
        })
    }

    render(){
        return(
            <div>
                <form>
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