import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>drake glauser portfolio</h1>
      </div>
      {Moment().format('MMMM Do YYYY, h:mm:ss a')}
    );
  }
}
