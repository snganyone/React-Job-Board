import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

class JobSearch extends Component{
    state = {
        query: ""
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
        //console.log(this.state.results);
        return(
            <div>
                <Form onSubmit={event => this.handleSubmit(event)}>
                    <Form.Row>
                    <label>Enter a Search Term:</label><br></br>
                    <input type="text" onChange={event => this.handleQueryChange(event)} value={this.state.query}/><br></br>
                    <input type="submit" value="Search Jobs"/>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default JobSearch;