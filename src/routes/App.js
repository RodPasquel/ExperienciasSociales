import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import SingUp from '../containers/SingUp';
import ResultSearch from '../containers/ResultSearch';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Reservation from '../containers/Reservation';
import InsideExperience from '../containers/InsideExperience';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/singup' component={SingUp} />
        <Route exact path='/result' component={ResultSearch} />
        <Route exact path='/inside' component={InsideExperience} />
        <Route exact path='/reservation' component={Reservation} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
