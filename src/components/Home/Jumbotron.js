import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Why Hello There!</div>
            <div className="intro-heading">
              I am Minh.
              <br />
              I enjoy coding,
              <br />
              taking photographs,
              <br />
              and traveling the world.
            </div>
            <button
              type="button"
              className="btn btn-primary btn-xl text-uppercase"
              onClick={onClick}
            >
              Learn more
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Jumbotron;
