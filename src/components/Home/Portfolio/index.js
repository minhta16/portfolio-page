import React, { Component } from 'react';
import img1 from 'assets/img/portfolio/01-thumbnail.jpg';
import img2 from 'assets/img/portfolio/02-thumbnail.jpg';
import img3 from 'assets/img/portfolio/03-thumbnail.jpg';
import img4 from 'assets/img/portfolio/04-thumbnail.jpg';
import img5 from 'assets/img/portfolio/05-thumbnail.jpg';
import img6 from 'assets/img/portfolio/06-thumbnail.jpg';
import SisuModal from 'components/Common/Modal/SisuModal';
import SwedishModal from 'components/Common/Modal/SwedishModal';
import BookMarketModal from 'components/Common/Modal/BookMarketModal';
import HomebaseModal from 'components/Common/Modal/HomebaseModal';
import ChicagoModal from 'components/Common/Modal/ChicagoModal';
import GotItModal from 'components/Common/Modal/GotItModal';
import PortfolioList from './PortfolioList';

const portfolioList = [
  {
    title: 'Got It, Inc.',
    caption: 'Software Engineer Internship',
    src: img6,
    modal: GotItModal,
    alt: 'Got It logo',
  },
  {
    title: 'Chicago Crime Analysis',
    caption: 'Data Model & Blog',
    src: img5,
    modal: ChicagoModal,
    alt: 'Graph of chicago crime',
  },
  {
    title: 'homebase',
    caption: 'Developer',
    src: img4,
    modal: HomebaseModal,
    alt: 'homebase logo',
  },
  {
    title: 'Augie Book Market',
    caption: 'Developer',
    src: img3,
    modal: BookMarketModal,
    alt: 'Augie Book Market logo',
  },
  {
    title: 'Swedish Immigration Trail',
    caption: 'Game Designer & Developer',
    src: img2,
    modal: SwedishModal,
    alt: 'Swedish Immigration Trail welcome screen',
  },
  {
    title: 'Sisu Vina',
    caption: 'Web Designer',
    src: img1,
    modal: SisuModal,
    alt: 'Sisu Vina logo',
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
