import React, { Component } from 'react';

import './Entry.css';

class Entry extends Component {
  render() {
    return (
      <div className="entry__box">
        <div className="entry">
          <h2 className="entry__title">Cadastro</h2>
          <form className="entry__form">
            <div className="entry__form-box">
              <input
                id="rent__name"
                className="entry__name"
                type="text"
                placeholder="Nome"
              />
            </div>
            <div className="entry__form-box">
              <input
                id="rent__address"
                className="entry__address"
                type="text"
                placeholder="Endereço"
              />

              <input
                id="rent__neighborhood"
                className="entry__neighborhood"
                type="text"
                placeholder="Bairro"
              />
            </div>
            <div className="entry__form-box">
              <input
                id="rent__city"
                className="entry__city"
                type="text"
                placeholder="Cidade"
              />
              <select
                name="entry__type"
                id="entry__type"
                className="entry__type"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Selecione um profissional
                </option>
                <option value="nutricionista">Nutricionista</option>
                <option value="psicologa">Psicólogo</option>
                <option value="personal">Personal Trainer</option>
              </select>
              <input
                id="rent__price"
                className="entry__price"
                type="number"
                placeholder="Preço"
              />
            </div>
            <div className="entry__form-box">
              <div className="entry__form-box-item">
                <label htmlFor="entry__initial-date">Início do período:</label>
                <input
                  type="date"
                  name="entry__initial-date"
                  id="entry__initial-date"
                />
              </div>
              <div className="entry__form-box-item">
                <label htmlFor="entry__final-date">Fim do período:</label>
                <input
                  type="date"
                  name="entry__final-date"
                  id="entry__final-date"
                />
              </div>
            </div>
            <div className="entry__form-box">
              <div className="entry__form-box-item">
                <label htmlFor="entry__initial-time">Hora de abertura:</label>
                <input
                  type="time"
                  name="entry__initial-time"
                  id="entry__initial-time"
                />
              </div>
              <div className="entry__form-box-item">
                <label htmlFor="entry__final-time">Hora de encerramento:</label>
                <input
                  type="time"
                  name="entry__final-time"
                  id="entry__final-time"
                />
              </div>
            </div>
            <div className="entry__form-box">
              <textarea
                name="rent__description"
                id="rent__description"
                className="entry__description"
                placeholder="Descrição"
                rows="10"
              />
            </div>
          </form>
          <div className="entry__buttons">
            <button className="entry__btn entry__btn--danger">Voltar</button>
            <button className="entry__btn entry__btn--success">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;
