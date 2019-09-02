import React, { Component } from 'react';
import Timeline from './Timeline';
import Profile from './Profile';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Profile />
        <Timeline />
      </React.Fragment>
    );
  }
}

export default Home;
