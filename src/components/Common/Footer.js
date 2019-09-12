import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Minh Ta 2019</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://github.com/minhta16" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/minh-ta-349823131/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://medium.com/@minhta16" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-medium-m" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
