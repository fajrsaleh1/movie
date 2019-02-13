import React, { Component } from 'react';

class Cast extends Component {
  render() {
 const castOne = this.props.actor;
    return (
      <div> 
  <p>{castOne.name}</p>
  <p>{castOne.role}</p>
      </div>
    );
  }
}

export default Cast;