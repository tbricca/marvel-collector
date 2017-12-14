import React, { Component } from 'react';
// import './App.css';


class App extends Component {
  render() {
      const metaData =this.props.comic;
    const {thumbnail} = comic.data.results[0] 
    return (
      <div className="App">
      <h1>{comic.data.results[0].title}</h1> 
      <img className="comic-thumbnail" src= {`${thumbnail.path}.${comic.data.results[0].thumbnail.extension}`} />
      </div>
    );
  }
}

export default App;
