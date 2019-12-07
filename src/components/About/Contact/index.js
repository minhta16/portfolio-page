import React, { Component } from 'react';
import SocialButtons from 'components/Common/SocialButtons';

class Contact extends Component {
  render() {
    return (
      <section
        className="page-section bg-light mt-align-center"
        id="connect"
        style={{ paddingBottom: '0' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3" />
            <div className="col-lg-6">
              <p className="mt-text-paragraph-bold">Looking forward to hearing from you.</p>
            </div>
            <div className="col-lg-3" />
          </div>
          <div className="row">
            <div className="col-lg-3" />
            <div className="col-lg-6">
              <p className="mt-text-paragraph mt-margin-btm-75">
                Whether you are interested to discuss about one of my projects or just want to say
                hi, drop me a line and I would be love to have a chat!
              </p>
            </div>
            <div className="col-lg-3" />
          </div>
          <div className="row">
            <div className="col-lg-12 ">
              <ul className="list-inline social-buttons">
                <p className="mt-text-paragraph">
                  <li className="list-inline-item" style={{ margin: '10px' }}>
                    <i className="fas fa-sort-down" />
                  </li>
                  Click Below
                  <li className="list-inline-item" style={{ margin: '10px' }}>
                    <i className="fas fa-sort-down" />
                  </li>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
