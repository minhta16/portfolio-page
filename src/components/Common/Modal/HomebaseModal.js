import React, { Component } from 'react';
import Image from 'components/Common/Image';
import homebaseImg from 'assets/img/portfolio/homebase/homebase.jpg';
import teamImg from 'assets/img/portfolio/homebase/team-photo.jpg';
import listingImg from 'assets/img/portfolio/homebase/homebase-listing.jpg';
import mapImg from 'assets/img/portfolio/homebase/homebase-map.jpg';
import BaseModal from './BaseModal';

class HomebaseModal extends Component {
  render() {
    return (
      <BaseModal {...this.props}>
        <h2 className="text-uppercase">Homebase</h2>
        <p className="item-intro text-muted">A new way to rent</p>
        <p className="item-intro text-muted">February 2018 - May 2018</p>
        <Image className="img-fluid d-block mx-auto" src={homebaseImg} alt="" />
        <p className="item-intro text-muted">homebase - A new way to rent</p>
        <p>
          Homebase was created to simplify the complex and inefficient rental process that students
          have to go through around us. Our college provides housing for the first three years, then
          students have to reach out to landlords themselves to rent a place for their fourth year.
          Having been in such a situation, we realized how frustrating it is to rent a good place to
          live at an affordable price. Landlords have nowhere to put up their listings and students
          have to rely on personal connections to book their housing. It is not a great picture to
          look at.
        </p>
        <Image className="img-fluid d-block mx-auto" src={teamImg} alt="" />
        <p className="item-intro text-muted">The homebase team</p>
        <p>
          We started by laying out ideas and designs for our rental application. We decided to go
          with building a web application because it is the best of both worlds: easy access with
          mobile devices and efficient management with desktops.
        </p>
        <Image className="img-fluid d-block mx-auto" src={listingImg} alt="" />
        <p className="item-intro text-muted">homebase listing page</p>
        <p>
          We thought about implementing two different hubs for users and admins. Users, including
          landlords and students, will be able to post and rent listings. Admins will be in charge
          of filtering bad content and policy violated listings.to create a friendly environment for
          everyone.
        </p>
        <Image className="img-fluid d-block mx-auto" src={mapImg} alt="" />
        <p className="item-intro text-muted">Each listing has a map for users' convenience</p>
        <h3>Takeaways</h3>
        <h5>Agile Methodology</h5>
        <p>
          Similar to the Swedish Immigrant Trail Game, we worked as a group of 4 to implement the
          application. We met every day and scrum to discuss the roadmap and individual progress.
          This time, we managed the project better with Asana, an agile management tool that layouts
          clearly the roadmap for our development.
        </p>
        <h5>Reactjs</h5>
        <p>
          A member of our team was very skilled in Reactjs. I learned a lot about Reactjs by working
          closely with him on this project. We were also able to embed some Google services
          including Login, Maps, and Firebase.
        </p>
        <p className="item-intro">
          Please check out our demo here:{' '}
          <a
            href="https://infallible-hypatia-806937.netlify.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            homebase
          </a>
          .
        </p>
      </BaseModal>
    );
  }
}

export default HomebaseModal;
