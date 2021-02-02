import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class JobUtils extends Component {
    render(){
        return(
            <div>
            <Button variant="success" href="/add-job">Add Job</Button>
            </div>
        )
    }
}

export default JobUtils;