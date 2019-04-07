import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Rents from './components/Rents/Rents';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faToilet } from '@fortawesome/free-solid-svg-icons'

import Rent from './components/Rents/Rent/Rent';
import Register from './components/Register/Register';
import './App.css';

library.add(faIgloo, faToilet)

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/rents" component={Rents} />
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
