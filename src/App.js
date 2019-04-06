import React, { Component } from 'react';

import Header from './components/Header/Header';
import Rent from './components/Rents/Rent/Rent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Rent />
        </div>
      </div>
    );
  }
}

export default App;
