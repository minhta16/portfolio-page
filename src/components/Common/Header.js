import React, { Component } from 'react';
import history from 'utils/history';
import { withRouter } from 'react-router-dom';
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
    path: window.location.pathname,
    intervalId: 0,
  };

  componentDidMount() {
    const h1 = parseInt(this.refs.header.offsetHeight, 10);
    window.addEventListener('scroll', this.calcScroll.bind(this, h1));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calcScroll);
  }

  onRedirect = path => () => {
    if (this.currentPageIsNav(path)) {
      this.scrollToTop();
    } else {
      history.push(path);
    }
    this.setState({
      path,
    });
  };

  // eslint-disable-next-line react/destructuring-assignment
  currentPageIsNav = navPath => navPath === this.state.path;

  // https://codepen.io/Qbrid/pen/GjVvwL
  scrollStep() {
    if (window.pageYOffset === 0) {
      const { intervalId } = this.state;
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollToTop() {
    const intervalId = setInterval(this.scrollStep.bind(this), 16.66);
    this.setState({ intervalId });
  }

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
            <button
              className="navbar-brand js-scroll-trigger"
              type="button"
              onClick={this.onRedirect('/home')}
            >
              Minh Ta
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

export default withRouter(Header);
