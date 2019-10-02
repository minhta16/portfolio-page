import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import img1 from 'assets/img/team/3.jpg';

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <FadeIn delay={1000}>
          <section className="bg-black page-section padding-nav" id="team">
            {/* <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <FadeIn delay={200} transitionDuration={1000}>
                    <h2 className="section-heading text-uppercase text-white">About me</h2>
                  </FadeIn>
                </div>
              </div>
            </div> */}
          </section>
        </FadeIn>
        <FadeIn delay={1600} transitionDuration={1000}>
          <section className="bg-white page-section" id="team">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="team-member">
                    <img className="mx-auto" src={img1} alt="Minh Ta avatar" />
                  </div>
                </div>
                <div className="col-lg-7 col-lg-offset-1 mx-auto">
                  <p className="mt-text-paragraph-bold mt-margin-btm-75 align-justify">
                    A little bit about myself
                  </p>
                  <p className="mt-text-paragraph align-justify">
                    <strong>Home: </strong>
                    Hanoi, Vietnam
                    <br />
                    <strong>Base: </strong>
                    Rock Island, Illinois, U.S.
                    <br />
                    <strong>Favs: </strong>
                    Photoshop, Reactjs, Java
                  </p>
                  <p className="mt-text-paragraph align-justify">
                    Hello, I&apos;m Minh! I am an aspiring senior from Augustana College who is
                    majoring in Computer Science and Applied Mathematics. I am interested in
                    learning software engineering, reading about cutting-edge technology, and
                    researching UX design patterns. Recently, I have finished a short term
                    internship with Got It, Inc. Vietnam and am training myself to become a
                    competent full-stack software developer.
                  </p>
                  <p className="mt-text-paragraph align-justify">
                    As a prospective developer, I am fascinated with how technology is changing
                    rapidly and how it creates endless potential for solving our problems. I am very
                    thrilled to learn more about Big Data, Artificial Intelligence, and Internet of
                    Things so that I can help making our life a little more convenient.
                  </p>
                  <p className="mt-text-paragraph align-justify">
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
