import React, { Component } from 'react';
import img1 from 'assets/img/portfolio/01-thumbnail.jpg';
import img2 from 'assets/img/portfolio/02-thumbnail.jpg';
import img3 from 'assets/img/portfolio/03-thumbnail.jpg';
import img4 from 'assets/img/portfolio/04-thumbnail.jpg';
import img5 from 'assets/img/portfolio/05-thumbnail.jpg';
import img6 from 'assets/img/portfolio/06-thumbnail.jpg';
import SisuModal from 'components/Common/Modal/SisuModal';
import PortfolioList from './PortfolioList';

const portfolioList = [
  {
    title: 'Sisu Vina',
    caption: 'Web Designer',
    src: img1,
    modal: SisuModal,
  },
  {
    title: 'Swedish Immigration Trail',
    caption: 'Game Designer & Developer',
    src: img2,
    modal: SisuModal,
  },
  {
    title: 'Augie Book Market',
    caption: 'Developer',
    src: img3,
    modal: SisuModal,
  },
  {
    title: 'homebase',
    caption: 'Developer',
    src: img4,
    modal: SisuModal,
  },
  {
    title: 'Chicago Crime Analysis',
    caption: 'Data Model & Blog',
    src: img5,
    modal: SisuModal,
  },
  {
    title: 'Got It, Inc.',
    caption: 'Software Engineer Internship',
    src: img6,
    modal: SisuModal,
  },
];

class Portfolio extends Component {
  render() {
    return (
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Projects</h2>
              <h3 className="section-subheading text-muted">
                What I have accomplished over the years
              </h3>
            </div>
          </div>
          <PortfolioList items={portfolioList} />
        </div>
      </section>
    );
  }
}

export default Portfolio;
