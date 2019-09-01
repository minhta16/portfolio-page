import React, { Component } from 'react';
import Portfolio from './Portfolio';
import About from './About';

class Home extends Component {
  render() {
    return (
      <fragment>
        <Portfolio />
        <About />
      </fragment>
    );
  }
}

export default Home;
