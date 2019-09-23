import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import img1 from 'assets/img/team/1.jpg';

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <FadeIn>
          <section className="bg-black page-section" id="team">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <FadeIn delay={200} transitionDuration={1000}>
                    <h2 className="section-heading text-uppercase text-white">About me</h2>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
        <FadeIn delay={600} transitionDuration={1000}>
          <section className="bg-white page-section" id="team">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src={img1} alt="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <p className="large text-dark align-justify">
                    Hello, I'm Minh! I am an aspiring senior from Augustana College who is majoring
                    in Computer Science and Applied Mathematics. I am interested in learning
                    software engineering, reading about cutting-edge technology, and researching UX
                    design patterns. Recently, I have finished a short term internship with Got It,
                    Inc. Vietnam and am training myself to become a competent full-stack software
                    developer.
                  </p>
                  <p className="large text-dark align-justify">
                    As a prospective developer, I am fascinated with how technology is changing
                    rapidly and how it creates endless potential for solving our problems. I am very
                    thrilled to learn more about Big Data, Artificial Intelligence, and Internet of
                    Things so that I can help making our life a little more convenient.
                  </p>
                  <p className="large text-dark align-justify">
                    In my free time, I enjoy taking photographs with my Minolta, hitting notes with
                    my guitar, and checking out amusing landmarks around the world.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </React.Fragment>
    );
  }
}

export default Profile;
