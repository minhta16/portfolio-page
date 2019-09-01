import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from 'components/Common/Header';
import Jumbotron from 'components/Common/Jumbotron';
import Home from 'components/Home';

const routes = [{ url: '/home', component: Home }];
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Jumbotron />
      <Switch>
        {routes.map(route => (
          <Route path={route.url} component={route.component} />
        ))}
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
