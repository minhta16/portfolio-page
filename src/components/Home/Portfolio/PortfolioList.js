import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioList = props => {
  const { items } = props;
  return (
    <div className="row">
      {items.map(item => (
        <PortfolioItem title={item.title} caption={item.caption} src={item.src} />
      ))}
    </div>
  );
};

export default PortfolioList;
