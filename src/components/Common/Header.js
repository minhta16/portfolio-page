import React, { Component } from 'react';
import history from 'utils/history';
import mtLogo from 'assets/img/logos/Mt.png';
import mtLogoActive from 'assets/img/logos/Mt-yellow.png';

export const routes = [
  {
    name: 'HOME',
    path: '/home',
  },
  {
    name: 'ABOUT',
    path: '/about',
  },
];

class Header extends Component {
  state = {
    headerTop: true,
    logoActive: false,
    path: window.location.pathname,
  };

  componentDidMount() {
    const h1 = parseInt(this.refs.header.offsetHeight, 10);
    window.addEventListener('scroll', this.calcScroll.bind(this, h1));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calcScroll);
  }

  onRedirect = path => () => {
    this.setState({
      path,
    });
    history.push(path);
  };

  // eslint-disable-next-line react/destructuring-assignment
  currentPageIsNav = navPath => navPath === this.state.path;

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

  setLogoActive = logoActive => () => {
    this.setState({
      logoActive,
    });
  };

  render() {
    const { headerTop, logoActive } = this.state;

    return (
      <React.Fragment>
        <nav
          className={`navbar navbar-expand-lg navbar-dark fixed-top ${!headerTop &&
            'navbar-shrink'}`}
          ref="header"
          id="mainNav"
        >
          <div className="container">
            <button
              type="button"
              className="navbar-brand"
              onMouseEnter={this.setLogoActive(true)}
              onMouseLeave={this.setLogoActive(false)}
              onClick={this.onRedirect('/home')}
            >
              <div className="logo" />
            </button>
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
                    <button
                      type="button"
                      className={`nav-link ${this.currentPageIsNav(route.path) ? 'active' : ''}`}
                      onClick={this.onRedirect(route.path)}
                    >
                      {route.name}
                    </button>
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
