import React, { Component } from 'react';
import Review from './review';

class Movie extends Component {
  render() {
    return (
      <div> 
      <h2>{this.props.movie.title}</h2>
      <img src = {this.props.movie.poster}/>
      <div><strong>{this.props.movie.rating}</strong></div>
      <p>
      {this.props.movie.description}
      </p>
      <Review/>
      </div>


    );
  }
}

export default Movie;

