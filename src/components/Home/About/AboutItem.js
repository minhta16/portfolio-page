import React from 'react';
import PropTypes from 'prop-types';

const AboutItem = props => {
  const { time, title, caption, inverted, src } = props;
  return (
    <li className={inverted && 'timeline-inverted'}>
      <div className="timeline-image">
        <img className="rounded-circle img-fluid" src={src} alt="" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{time}</h4>
          <h4 className="subheading">{title}</h4>
        </div>
        <div className="timeline-body">
          <p className="text-muted">{caption}</p>
        </div>
      </div>
    </li>
  );
};

AboutItem.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
  inverted: PropTypes.bool,
  src: PropTypes.object.isRequired,
};

AboutItem.defaultProps = {
  time: '',
  title: '',
  caption: '',
  inverted: false,
};

export default AboutItem;
