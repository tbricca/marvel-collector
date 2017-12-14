import React, { Component } from 'react';
// import './App.css';


class App extends Component {
  render() {
      // lookup exactly how to properly use metadata
      const metaData =this.props.comic;
    const {thumbnail} = comic.data.results[0] 
    return (
      <div className="App">
      <h1>{comic.data.results[0].title}</h1> 
      <h1>Issue</h1>
      <h1>Date</h1>
      <h1>Price</h1>
      <img className="comic-thumbnail" src= {`${thumbnail.path}.${comic.data.results[0].thumbnail.extension}`} />
      </div>
    );
  }
}

export default App;
