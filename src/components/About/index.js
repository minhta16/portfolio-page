import React, { Component } from 'react';
import PseudoLoading from 'components/Common/PseudoLoading';
import Timeline from './Timeline';
import Profile from './Profile';

class Home extends Component {
  render() {
    return (
      <PseudoLoading>
        <Profile />
        <Timeline />
      </PseudoLoading>
    );
  }
}

export default Home;
