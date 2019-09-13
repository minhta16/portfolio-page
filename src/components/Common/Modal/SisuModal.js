import React, { Component } from 'react';
import img from 'assets/img/portfolio/01-full.jpg';
import BaseModal from './BaseModal';

class SisuModal extends Component {
  render() {
    return (
      <BaseModal {...this.props}>
        <h2 className="text-uppercase">Project Name</h2>
        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
        <img className="img-fluid d-block mx-auto" src={img} alt="" />
        <p>
          Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
          repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
          nostrum, reiciendis facere nemo!
        </p>
        <ul className="list-inline">
          <li>Date: January 2017</li>
          <li>Client: Threads</li>
          <li>Category: Illustration</li>
        </ul>
      </BaseModal>
    );
  }
}

export default SisuModal;
