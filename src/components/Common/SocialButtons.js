import React from 'react';

const SocialButtons = () => {
  return (
    <ul className="list-inline social-buttons">
      <li className="list-inline-item">
        <a href="mailto: minhta.dev@gmail.com" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-envelope" />
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://github.com/minhta16" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github" />
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://www.linkedin.com/in/minhta16" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-linkedin-in" />
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://medium.com/@minhta16" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-medium-m" />
        </a>
      </li>
    </ul>
  );
};

export default SocialButtons;
