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

    render(){
        return(
            <div>
                <form>
                    <label>Enter a Search Term:</label><br></br>
                    <input type="text" value={this.state.query}/><br></br>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default JobSearch;