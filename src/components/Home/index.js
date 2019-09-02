import React, { Component } from 'react';
import Portfolio from './Portfolio';
import Jumbotron from './Jumbotron';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <Portfolio />
      </React.Fragment>
    );
  }
}

export default Home;
