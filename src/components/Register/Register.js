import React, { Component } from 'react';

import './Register.css';

class Register extends Component {
  render() {
    return (
      <div className="register__box">
        <div className="register">
          <h2 className="register__title">Register</h2>
          <div className="register__form">
            <div className="register__form-box">
              <input
                id="rent__name"
                className="register__name"
                type="text"
                placeholder="Nome"
              />
            </div>
            <div className="register__form-box">
              <input
                id="rent__price"
                className="register__price"
                type="number"
                placeholder="Preço"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
