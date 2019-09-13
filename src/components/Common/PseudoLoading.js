import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import * as loadingData from 'assets/animations/loading-lego.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

class PseudoLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true });
    }, 1000);
  }

  render() {
    const { done } = this.state;
    const { children } = this.props;
    return (
      <div>
        {!done && (
          <section className="bg-dark page-blank">
            <FadeIn>
              <div className="d-flex justify-content-center align-items-center">
                {/* <h1>fetching pizza</h1> */}
                <Lottie options={defaultOptions} height={300} width={300} />
              </div>
            </FadeIn>
          </section>
        )}
        <div className={!done ? 'hidden' : ''}>{children}</div>
      </div>
    );
  }
}

PseudoLoading.propTypes = {
  children: PropTypes.any,
};

PseudoLoading.defaultProps = {
  children: <div />,
};
export default PseudoLoading;
