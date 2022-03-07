import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import img1 from 'assets/img/team/3.jpg';
import img1Square from 'assets/img/team/3_recta.jpg';

class Profile extends Component {
  state = {
    width: window.innerWidth,
  };

  // Bind window width and height
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
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
                    <img
                      className="mx-auto"
                      src={width <= 992 ? img1Square : img1}
                      alt="Minh Ta avatar"
                    />
                  </div>
                </div>
                <div className="col-lg-7 col-lg-offset-1 mx-auto">
                  <p className="mt-text-paragraph-bold mt-margin-btm-75 align-justify">
                    A little bit about myself
                  </p>
                  <p className="mt-text-paragraph mt-margin-btm-75 align-justify">
                    <strong>Home: </strong>
                    Hanoi, Vietnam
                    <br />
                    <strong>Base: </strong>
                    Boston, MA
                    <br />
                    <strong>Love: </strong>
                    Javascript, ScikitLearn, Photoshop
                  </p>
                  <p className="mt-text-paragraph align-justify">
                    Hello, my name is Minh, an aspiring Software Engineer at Author by Humana. I
                    graduated from Augustana College with a double major in Computer Science and
                    Applied Mathematics and a minor in Data Science. I can easily geek out when
                    someone mentions cutting-edge technology, interesting ways to solve existing
                    problems, and UX design patterns.
                  </p>
                  <p className="mt-text-paragraph align-justify">
                    I am fascinated with how technology is changing rapidly and how it creates
                    endless possibilities for solving our simple yet ever-present problems. I am
                    very thrilled when it comes to ML/AI, UX Development, and IoT. It is amazing how
                    these domains can rapidly change our life for the better.
                  </p>
                  <p className="mt-text-paragraph align-justify">
                    In my free time, I enjoy taking photographs with my Minolta analog camera,
                    hitting notes with my guitar, and checking out amusing landmarks around the
                    world.z
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
