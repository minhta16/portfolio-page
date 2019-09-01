import React, { Component } from 'react';
import Portfolio from './Portfolio';
import About from './About';
import Jumbotron from './Jumbotron';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <Portfolio />
        <About />
      </React.Fragment>
    );
  }
}

export default Home;
