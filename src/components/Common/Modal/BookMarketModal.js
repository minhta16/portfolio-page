import React, { Component } from 'react';
import Image from 'components/Common/Image';
import logoImg from 'assets/img/portfolio/book-market/logo.jpg';
import searchImg from 'assets/img/portfolio/book-market/search.jpg';
import postingImg from 'assets/img/portfolio/book-market/upload-listing.jpg';
import BaseModal from './BaseModal';

class BookMarketModal extends Component {
  render() {
    return (
      <BaseModal {...this.props}>
        <h2 className="text-uppercase">Augie Book Market</h2>
        <p className="item-intro text-muted">A solution for selling used textbooks.</p>
        <p className="item-intro text-muted">February 2018 - April 2018</p>
        <Image className="img-fluid d-block mx-auto" src={logoImg} alt="" />
        <p>
          One day in my Spring break, I stumbled upon countless Facebook posts of students selling
          their used books. I wondered if I can create a platform where it is more efficient for
          everyone to sell their unused textbooks and to buy textbooks required for their upcoming
          classes.
        </p>
        <h3>IMPLEMENTATION</h3>
        <p>
          I utilized Firebase, a ready-to-use mobile-friendly database provided by Google for my
          backend. This project marks the first time I implement a web application using Reactjs. I
          did not design my own assets apart from the logo and decided to go with @material-ui
          library instead. It saved me some time re-inventing the wheel.
        </p>
        <h3>FUNCTIONALITY</h3>
        <p>
          The end goal of the application is to create a frictionless user experience of selling
          used books. Hence, I focused on implementing an efficient search functionality that can
          sort books based on their name, ISBN, and author.
        </p>
        <Image className="img-fluid d-block mx-auto" src={searchImg} alt="" />
        <p className="item-intro text-muted">User searching for posted listings.</p>
        <p>
          Another problem I thought about when posting is the possibility of spam posts. I decided
          to implement the Google Books API to avoid invalid postings.
        </p>
        <Image className="img-fluid d-block mx-auto" src={postingImg} alt="" />
        <p className="item-intro text-muted">User searching for a book to post their listing.</p>
        <h3>FUTURE DEVELOPMENT</h3>
        <p>
          I would like to develop this further in the future and possibly ties the application to
          the college bookstore for easier pick-up/drop-off.
        </p>
        <h3>TAKEAWAYS</h3>
        <h5>Technical Tools</h5>
        <p>
          I learned Reactjs, Firebase, @material-ui, and other libraries in general. The project
          sets off my usage of Reactjs, one of my preferred tools now. I also had a chance to touch
          on Google Cloud and its amazing capabilities when I learn Firebase and Google Books API.
          There is a wide range of tools Google Cloud provides that I figured out I can use later on
          by working on this project.
        </p>
        <h5>Near Full-stack Development Experience</h5>
        <p>
          Even though the application handles back-end with Firebase, I had to build the data
          structure myself. Then I implemented the front-end and has API calls to communicate with
          the Firebase server.
        </p>
      </BaseModal>
    );
  }
}

export default BookMarketModal;
