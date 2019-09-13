import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import PropTypes from 'prop-types';

class BaseModal extends Component {
  render() {
    const { children, isOpen, title, toggle } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle} modalClassName="portfolio-modal">
        <button type="button" className="close-modal borderless-button" onClick={toggle}>
          <div className="lr">
            <div className="rl" />
          </div>
        </button>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                {/* Project Details Go Here */}
                {children}
                <button className="btn btn-primary" onClick={toggle} type="button">
                  <i className="fas fa-arrow-left" />
                  {' Back'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

BaseModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

BaseModal.defaultProps = {
  title: '',
};

export default BaseModal;