import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from 'utils/history';
import Header from 'components/Common/Header';
import Home from 'components/Home';
import Footer from 'components/Common/Footer';
import About from 'components/About';

const routes = [{ url: '/home', component: Home }, { url: '/about', component: About }];

const App = () => {
  return (
    <Router history={history}>
      <Route
        render={({ location }) => (
          <div>
            <Header />
            <Switch location={location}>
              {routes.map(route => (
                <Route key={route.url} path={route.url} component={route.component} />
              ))}
              <Redirect to="/home" />
            </Switch>
            <Footer />
          </div>
        )}
      />
    </Router>
  );
};

export default App;
