import React, { Component } from 'react';

class JobSearch extends Component{
    state = {
        query: ""
    }

    render(){
        return(
            <div>
                <form>
                    <label>Enter a Search Term:</label><br></br>
                    <input type="text" /><br></br>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default JobSearch;