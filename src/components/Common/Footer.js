import React from 'react';
import SocialButtons from './SocialButtons';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12 align-items-center">
          <SocialButtons />
        </div>

        <div className="col-md-12 align-items-center">
          <span className="copyright">Copyright &copy; Minh Ta 2019</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
