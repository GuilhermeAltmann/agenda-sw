import React, { Component } from 'react';

import Header from './components/Header/Header';
import Rents from './components/Rents/Rents';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faToilet } from '@fortawesome/free-solid-svg-icons'

import './App.css';

library.add(faIgloo, faToilet)

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content"><Rents /></div>
      </div>
    );
  }
}

export default App;
