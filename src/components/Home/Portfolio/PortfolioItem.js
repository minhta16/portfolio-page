import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PortfolioItem extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { item } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="col-md-4 col-sm-6 portfolio-item">
        <button type="button" className="portfolio-link borderless-button" onClick={this.toggle}>
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
        </div>
        <item.modal isOpen={isOpen} toggle={this.toggle} />
      </div>
    );
  }
}

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PortfolioItem;
