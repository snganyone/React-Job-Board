import React, { Component } from 'react';

class AgencyList extends Component {
    render(){
        return(<div>{this.props.agencies.map(a => a.name)}</div>)
    }
}

export default AgencyList;