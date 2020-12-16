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
                    <img className="mx-auto rounded-circle" src={img1} alt="Minh Ta avatar" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <p className="large text-dark align-justify">
                    {`Hello, my name is Minh. I am an aspiring Software Developer who graduated 
                    from Augustana College with a double major in Computer Science and Applied 
                    Mathematics and a minor in Data Science. I can easily geek out when someone 
                    mentions cutting-edge tech products, interesting ways to solve existing problems, 
                    and UX design patterns. In the past few years, I have finished a software engineering 
                    internship with Got It, Inc. Vietnam, a software developing internship with Augustana 
                    IT Services, an SEO Specialist internship with Cloudburst Australia, and now I am a 
                    proud Software Engineer for Aquent IT Solutions.`}
                  </p>
                  <p className="large text-dark align-justify">
                    {`I am fascinated with how technology is changing rapidly and how it creates endless 
                    possibilities for solving our simple yet ever-present problems. I am very thrilled 
                    when it comes to UX Development, ML/AI, and IoT so that I can contribute to raising 
                    our life quality.`}
                  </p>
                  <p className="large text-dark align-justify">
                    {`In my free time, I enjoy taking photographs with my Minolta analog camera, hitting 
                    notes with my guitar, and checking out amusing landmarks around the world.`}
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
