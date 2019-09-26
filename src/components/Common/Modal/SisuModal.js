import React, { Component } from 'react';
import Image from 'components/Common/Image';
import img from 'assets/img/portfolio/sisu/sisu_logo(final).png';
import BaseModal from './BaseModal';

class SisuModal extends Component {
  render() {
    return (
      <BaseModal {...this.props}>
        <h2 className="text-uppercase">Sisu Vina</h2>
        <p className="item-intro text-muted">A three-month design internship.</p>
        <p className="item-intro text-muted">May 2017 - August 2017</p>
        <p>
          I had a great chance to work as the designer for a Vietnamese startup Sisu Vina. Over
          three months, I was able to come up with a web interface design and a logo for the newly
          formed firm.
        </p>
        <Image
          className="img-fluid d-block mx-auto"
          src={img}
          alt="The final design for SisuVina logo"
        />
        <p className="item-intro text-muted">The final design for SisuVina logo</p>
        <h3>Takeaways</h3>
        <h5>Brand Recognition and UX design</h5>
        <p>
          During my time at Sisu, I had the time and opportunity to develop my understanding of a
          user experience design and what good brand recognition consists of through hours of
          researching design principles for the logo and website.
        </p>
        <h5>Designer&apos;s Toolbox</h5>
        <p>
          I spent most of my time working on Adobe Illustrator, so I gained some insight into the
          tool and its pros and cons in comparison to other tools that I have used before.
        </p>
      </BaseModal>
    );
  }
}

export default SisuModal;
