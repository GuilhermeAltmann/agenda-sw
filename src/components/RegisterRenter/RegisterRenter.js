import React, { Component } from 'react';

import './RegisterRenter.css';

class RegisterRenter extends Component {
  cadastra = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="renter__box">
        <div className="renter">
          <h2 className="renter__title">Sobre o dono da sala:</h2>
          <form className="renter__form">
            <div className="renter__form-box">
              <div className="renter__form-box-item">
                <input type="text" placeholder="Nome" />
              </div>
              <div
                className="renter__form-box-item"
                style={{ marginLeft: '30px' }}
              >
                <input type="text" placeholder="Sobrenome" />
              </div>
            </div>
            <div className="renter__form-box">
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="renter__form-box">
              <input type="number" placeholder="Celular (com DDD)" />
            </div>
            <div className="renter__form-box">
              <input type="number" placeholder="CPF (apenas números)" />
            </div>
          </form>
          <div className="renter__buttons">
            <button
              className="renter__btn renter__btn--success"
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

export default RegisterRenter;
