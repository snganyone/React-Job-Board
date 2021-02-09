import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class AgencyList extends Component {
    render(){
        return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            {this.props.agencies.map(a => 
                <Card>
                    <Card.Body>
                        <Card.Title>{a.name}</Card.Title>
                        <Card.Subtitle>{a.agency_type}</Card.Subtitle>
                        <Card.Text>{a.bio}</Card.Text>
                    </Card.Body>
                </Card>
                
                )}
        </div>)
    }
}

export default AgencyList;