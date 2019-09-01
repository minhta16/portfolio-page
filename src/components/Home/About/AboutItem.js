import React from 'react';

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

export default AboutItem;
