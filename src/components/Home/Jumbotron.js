import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Why Hello There!</div>
            <div className="intro-heading">
              Welcome to my home.
              <br />
              Let me tell you a bit about myself.
            </div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">
              Click here
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Jumbotron;
