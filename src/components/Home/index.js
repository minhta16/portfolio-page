import React, { Component } from 'react';
import PseudoLoading from 'components/Common/PseudoLoading';
import Portfolio from './Portfolio';
import Jumbotron from './Jumbotron';

class Home extends Component {
  render() {
    return (
      <PseudoLoading>
        <Jumbotron />
        <Portfolio />
      </PseudoLoading>
    );
  }
}

export default Home;
