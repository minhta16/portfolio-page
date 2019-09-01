import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from 'utils/history';
import Header from 'components/Common/Header';
import Jumbotron from 'components/Common/Jumbotron';
import Home from 'components/Home';
import Footer from 'components/Common/Footer';

const routes = [{ url: '/home', component: Home }];
const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Jumbotron />
      <Switch>
        {routes.map(route => (
          <Route key={route.url} path={route.url} component={route.component} />
        ))}
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
