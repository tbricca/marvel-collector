import React, { Component } from 'react';
// import './App.css';


class ListItem extends Component {
  render() {
      // lookup exactly how to properly use metadata
    const metaData =comic.data.results[0];
    const {thumbnail, issueNumber, pageCount, dates, prices} = metaData;

    return (
      <div className="App">
      <h1>[metadata.title]</h1>
     {/*  <h1>{comic.data.results[0].title}</h1>  */}
      <h1>Issue: [issuenumber]</h1>
      <h1>Page: [pageCount]</h1>
      <h1>Price: $[prices[0].price]</h1>
      <img className="comic-thumbnail" src= {`${thumbnail.path}.${comic.data.results[0].thumbnail.extension}`} />
      </div>
    );
  }
}

export default App;
