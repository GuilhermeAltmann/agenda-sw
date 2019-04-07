import React, { Component } from 'react';

import './Register.css';

class Register extends Component {
  cadastra = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="register__box">
        <div className="register">
          <h2 className="register__title">Cadastrar</h2>
          <form className="register__form">
            <div className="register__form-box">
              <div className="register__form-box-item">
                <input type="text" placeholder="Nome" />
              </div>
              <div
                className="register__form-box-item"
                style={{ marginLeft: 'auto' }}
              >
                <input type="text" placeholder="Sobrenome" />
              </div>
            </div>
            <div className="register__form-box">
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="register__form-box">
              <input type="number" placeholder="Celular" />
            </div>
          </form>
          <div className="register__buttons">
            <button
              className="register__btn register__btn--success"
              onClick={this.cadastra.bind(this)}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
