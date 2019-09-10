import React, { Component } from 'react';

class Jumbotron extends Component {
  // Setup animation
  state = {
    showUnderscore: false,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { showUnderscore } = this.state;
      return this.setState({ showUnderscore: !showUnderscore });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { onClick } = this.props;
    const { showUnderscore } = this.state;
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Hello!</div>
            <div className="intro-heading">
              I am Minh.
              <br />
              {`I enjoy `}
              <code>{`$coding${showUnderscore ? '_' : ' '}`}</code>
              ,
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
