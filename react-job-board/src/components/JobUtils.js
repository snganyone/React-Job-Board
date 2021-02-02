import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class JobUtils extends Component {
    render(){
        return(
            <div>
            <Link to="/add-job"><Button variant="success">Add Job</Button></Link>
            </div>
        )
    }
}

export default JobUtils;