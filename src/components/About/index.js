import React, { Component } from 'react';
import PseudoLoading from 'components/Common/PseudoLoading';
import Timeline from './Timeline';
import Profile from './Profile';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
      <PseudoLoading>
        <Profile />
        {/* <Timeline /> */}
        <Contact />
      </PseudoLoading>
    );
  }
}

export default Home;
