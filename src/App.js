import React, { Component } from 'react';

import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">Content</div>
      </div>
    );
  }
}

export default App;
