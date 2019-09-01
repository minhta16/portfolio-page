import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PortfolioItem extends Component {
  render() {
    const { onClick, title, caption, src } = this.props;
    return (
      <div className="col-md-4 col-sm-6 portfolio-item">
        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x" />
            </div>
          </div>
          <img className="img-fluid" src={src} alt="" />
        </a>
        <div className="portfolio-caption">
          <h4>{title}</h4>
          <p className="text-muted">{caption}</p>
        </div>
      </div>
    );
  }
}

PortfolioItem.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  caption: PropTypes.string,
  src: PropTypes.string.isRequired,
};

PortfolioItem.defaultProps = {
  onClick: () => {},
  title: '',
  caption: '',
};

export default PortfolioItem;
