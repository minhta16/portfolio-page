import React, { Component } from 'react';
import Image from 'components/Common/Image';
import tempGraphImg from 'assets/img/portfolio/chicago-crime/crime-temp-graph.png';
import heatmapImg from 'assets/img/portfolio/chicago-crime/heatmap.png';
import BaseModal from './BaseModal';

class ChicagoModal extends Component {
  render() {
    return (
      <BaseModal {...this.props}>
        <h2 className="text-uppercase">Chicago Crime Analysis</h2>
        <p className="item-intro text-muted">A deeper look into Chicago crime</p>
        <p className="item-intro text-muted">February 2018 - May 2018</p>
        <Image
          className="img-fluid d-block mx-auto"
          src={tempGraphImg}
          alt="graph of crime rate and temperature"
        />
        <p className="item-intro text-muted">The correlation between crime rate and temperature</p>
        <p>
          On a snowy day in February 2019, when I was looking at the world happiness scores, an idea
          splashed on my teammates and my mind about analyzing crime rates to find its correlation
          to different variables. We gathered to decide what we would analyze and what would the
          scope of our research be. We finally took Chicago as our area and divided our project into
          two main parts: (1) the correlation between crime rate and different variables and (2) the
          increase of security cameras in correlation with the crime rate.
        </p>
        <Image
          className="img-fluid d-block mx-auto"
          src={heatmapImg}
          alt="graph of camera location and heatmap of crime"
        />
        <p className="item-intro text-muted">Camera location vs. heatmap of crime</p>
        <p>
          {'If you are interested in learning more about our analysis, please '}
          <a
            href="https://medium.com/augie-data360-chicago-crime-analysis"
            rel="noopener noreferrer"
            target="_blank"
          >
            click here
          </a>
          {
            ' for our full recap of how we started, the challenges that we faced, and the insight we got eventually.'
          }
        </p>
      </BaseModal>
    );
  }
}

export default ChicagoModal;
