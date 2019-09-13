import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';

const PortfolioList = props => {
  const { items } = props;
  return (
    <div className="row">
      {items.map(item => (
        <PortfolioItem key={item.title} item={item} />
      ))}
    </div>
  );
};

PortfolioList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PortfolioList;
