import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className="page-section bg-light" id="connect">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Connect</h2>
              <h3 className="section-subheading text-muted">
                If you have any inquiry or just want to say hi, please feel free to hit me up!
              </h3>
              <a
                className="btn btn-primary btn-xl text-uppercase"
                href="mailto: minhta16@augustana.edu"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
