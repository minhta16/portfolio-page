import React, { Component } from 'react';
import img1 from 'assets/img/portfolio/01-thumbnail.jpg';
import img2 from 'assets/img/portfolio/02-thumbnail.jpg';
import img3 from 'assets/img/portfolio/03-thumbnail.jpg';
import img4 from 'assets/img/portfolio/04-thumbnail.jpg';
import img5 from 'assets/img/portfolio/05-thumbnail.jpg';
import img6 from 'assets/img/portfolio/06-thumbnail.jpg';
import img7 from 'assets/img/portfolio/07-thumbnail.jpg';
import img8 from 'assets/img/portfolio/08-thumbnail.jpg';
import SisuModal from 'components/Common/Modal/SisuModal';
import SwedishModal from 'components/Common/Modal/SwedishModal';
import BookMarketModal from 'components/Common/Modal/BookMarketModal';
import HomebaseModal from 'components/Common/Modal/HomebaseModal';
import ChicagoModal from 'components/Common/Modal/ChicagoModal';
import GotItModal from 'components/Common/Modal/GotItModal';
import { HumanaModal } from 'components/Common/Modal/HumanaModal';
import { AquentModal } from 'components/Common/Modal/AquentModal';
import PortfolioList from './PortfolioList';

const portfolioList = [
  {
    title: 'Author by Humana',
    caption: 'Software Engineer 2',
    src: img8,
    modal: HumanaModal,
    time: '2021-2022',
    alt: 'Author by Humana logo',
  },
  {
    title: 'Aquent IT Solutions',
    caption: 'Software Developer',
    src: img7,
    modal: AquentModal,
    time: '2020-2021',
    alt: 'Aquent logo',
  },
  {
    title: 'Got It, Inc.',
    caption: 'Software Engineer Internship',
    src: img6,
    modal: GotItModal,
    time: '2020',
    alt: 'Got It logo',
  },
  {
    title: 'Chicago Crime Analysis',
    caption: 'Data Model & Blog',
    src: img5,
    modal: ChicagoModal,
    time: '2020',
    alt: 'Graph of chicago crime',
  },
  {
    title: 'homebase',
    caption: 'Developer',
    src: img4,
    modal: HomebaseModal,
    time: '2019',
    alt: 'homebase logo',
  },
  {
    title: 'Augie Book Market',
    caption: 'Developer',
    src: img3,
    modal: BookMarketModal,
    time: '2019',
    alt: 'Augie Book Market logo',
  },
  {
    title: 'Swedish Immigration Trail',
    caption: 'Game Designer & Developer',
    src: img2,
    modal: SwedishModal,
    time: '2018',
    alt: 'Swedish Immigration Trail welcome screen',
  },
  {
    title: 'Sisu Vina',
    caption: 'Web Designer',
    src: img1,
    modal: SisuModal,
    time: '2018',
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
