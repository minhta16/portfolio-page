import React, { Component } from 'react';
import SocialButtons from 'components/Common/SocialButtons';

class Contact extends Component {
  render() {
    return (
      <section className="page-section bg-light mt-align-center" id="connect">
        <div className="container">
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
            <div className="col-lg-3" />
            <div className="col-lg-6">
              <p className="mt-text-paragraph-bold">Looking forward to hearing from you.</p>
            </div>
            <div className="col-lg-3" />
          </div>
          <div className="row">
            <div className="col-lg-12 ">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <i className="fas fa-sort-down" />
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-sort-down" />
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-sort-down" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
