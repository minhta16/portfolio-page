import React from 'react';
import Img from 'react-image';
import Lottie from 'react-lottie';
import * as loadingData from 'assets/animations/loading-image.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
export default props => (
  <Img loader={<Lottie options={defaultOptions} height={200} width={200} />} {...props} />
);
