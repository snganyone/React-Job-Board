import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class JobInput extends Component {
    render(){
        return(
            <div>
            <Button variant="success" href="/add-job">Add Job</Button>
            </div>
        )
    }
}

export default JobInput;