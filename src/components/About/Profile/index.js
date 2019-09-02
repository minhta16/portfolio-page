import React, { Component } from 'react';
import PropTypes from 'prop-types';
import img1 from 'assets/img/team/1.jpg';

class Profile extends Component {
  render() {
    return (
      <section className="bg-dark page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase text-white">About me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={img1} alt="" />
                <h4 className="text-white">Minh Ta</h4>
                <p className="text-light">
                  Computer Science & Applied Math Major
                  <br />
                  Augustana College '20
                </p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam
                veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
