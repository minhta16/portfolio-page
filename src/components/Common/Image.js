import React from 'react';
import Img from 'react-image';
import Lottie from 'react-lottie';
import * as imageLoader from 'assets/animations/image-loader-2.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: imageLoader.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
export default props => (
  <Img loader={<Lottie options={defaultOptions} height={200} width={200} />} {...props} />
);
