import React, { Component } from 'react';

class AgencyList extends Component {
    render(){
        return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            {this.props.agencies.map(a => a.name)}
        </div>)
    }
}

export default AgencyList;