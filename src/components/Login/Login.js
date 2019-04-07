import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  login = e => {
    e.preventDefault();
    this.props.history.push('/');
  };

  criarConta = e => {
    e.preventDefault();
    this.props.history.push('/register');
  };

  criarContaLocatario = e => {
    e.preventDefault();
    this.props.history.push('/renter');
  };

  render() {
    return (
      <div className="login__box">
        <div className="login">
          <h2 className="login__title">Login</h2>
          <form className="login__form">
            <input type="email" placeholder="e-mail" />
            <input
              type="password"
              placeholder="password"
              style={{ marginTop: '20px' }}
            />
            <div className="login__btn-box">
              <button onClick={this.login.bind(this)} className="login__btn">
                Entrar
              </button>
            </div>
          </form>
          <div className="login__links">
            <span
              className="login__link--user"
              onClick={this.criarConta.bind(this)}
            >
              Não tem uma conta ainda?{' '}
              <span className="login__link--user-cadastre">Cadastre-se</span>
            </span>
            <span
              className="login__link--locatario"
              onClick={this.criarContaLocatario.bind(this)}
            >
              Quero compartilhar minha sala.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
