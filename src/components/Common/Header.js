import React, { Component } from 'react';
import history from 'utils/history';

export const routes = [
  {
    name: 'Home',
    path: '/home',
  },
  {
    name: 'About',
    path: '/about',
  },
];

class Header extends Component {
  state = {
    headerTop: true,
    path: undefined,
  };

  componentDidMount() {
    const h1 = parseInt(this.refs.header.offsetHeight, 10);
    window.addEventListener('scroll', this.calcScroll.bind(this, h1));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calcScroll);
  }

  onRedirect = path => () => {
    history.push(path);
  };

  calcScroll(h1) {
    const oldWindow = window;
    const heightDiff = parseInt(h1, 10);
    const scrollPos = oldWindow.scrollY;
    if (scrollPos > heightDiff) {
      // here this means user has scrolled past your header,
      // you may rerender by setting State or do whatever
      this.setState({
        headerTop: false,
      });
    } else {
      // here the user has scrolled back to header's territory,
      // it's optional here for you to remove the element on navbar as stated in the question or not
      this.setState({
        headerTop: true,
      });
    }
  }

  render() {
    const { headerTop } = this.state;

    return (
      <React.Fragment>
        <nav
          className={`navbar navbar-expand-lg navbar-dark fixed-top ${!headerTop &&
            'navbar-shrink'}`}
          ref="header"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              The Amazing Spider Minh
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                {routes.map(route => (
                  <li key={route.name} className="nav-item">
                    <a className="nav-link" onClick={this.onRedirect(route.path)}>
                      {route.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
