import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {
    render() {
        return (
            <ListItem comic={this.props.result[0]}/>

            
        );
    }
}

export default List;