import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Rent from './components/Rents/Rent/Rent';
import Register from './components/Register/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/" exact component={Rent} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
