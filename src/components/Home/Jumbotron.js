import React, { Component } from 'react';
import history from 'utils/history';
import { withRouter } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';

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

  onClickLearnMore = () => {
    history.push('/about');
  };

  render() {
    const { showUnderscore } = this.state;
    return (
      <FadeIn delay={1000}>
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <FadeIn delay={1400} transitionDuration={1000}>
                {/* First fadein element */}
                <React.Fragment>
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
                </React.Fragment>
              </FadeIn>
              <FadeIn delay={1800} transitionDuration={1000}>
                <button
                  type="button"
                  className="btn btn-primary btn-xl text-uppercase"
                  onClick={this.onClickLearnMore}
                >
                  Learn more
                </button>
              </FadeIn>
            </div>
          </div>
        </header>
      </FadeIn>
    );
  }
}

export default withRouter(Jumbotron);
