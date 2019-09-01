import React, { Component } from 'react';
import Portfolio from './Portfolio';
import About from './About';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Portfolio />
        <About />
      </React.Fragment>
    );
  }
}

export default Home;
