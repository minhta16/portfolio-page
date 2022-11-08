import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const PortfolioItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="col-md-4 col-sm-6 portfolio-item">
      <button type="button" className="portfolio-link borderless-button" onClick={toggle}>
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fas fa-3x" />
          </div>
        </div>
        <img className="img-fluid" src={item.src} alt={item.alt} />
      </button>
      <div className="portfolio-caption">
        <h5>{item.title}</h5>
        <p className="text-muted">{item.caption}</p>
        <p className="text-muted">{item.time}</p>
      </div>
      {item.modal && <item.modal isOpen={open} toggle={toggle} />}
    </div>
  );
};

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PortfolioItem;
