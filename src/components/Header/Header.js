import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';

class Header extends Component {
  redireciona = () => {
    this.props.history.push('/');
  };

  logar = () => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="header">
        <h3 className="header__title" onClick={this.redireciona.bind(this)}>
          CoHealth
        </h3>
        <div className="header__end" onClick={this.logar.bind(this)}>
          <span className="header__end-text">Entrar</span>
          <FontAwesomeIcon icon="sign-in-alt" style={{ color: '#fff' }} />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
