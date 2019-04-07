import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Rent.css';
import workRoom from '../../../assets/img/workroom.jpg';

class Rent extends Component {
  voltar = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="rent">
        <div className="rent__data">
          <img className="rent__image" src={workRoom} alt="Work Room" />
          <h3 className="rent__title">Sala no Moinhos de Vento</h3>
          <ul className="rent__items">
            <li className="rent__item">
              <FontAwesomeIcon className="rent_item-icon" icon="clone" />
              <span className="rent__item-text">32m²</span>
            </li>
            <li className="rent__item">
              <FontAwesomeIcon className="rents__item-icon" icon="car" />
              <span className="rent__item-text">1 vaga</span>
            </li>
            <li className="rent__item">
              <FontAwesomeIcon
                className="rents__item-icon"
                icon="calendar-day"
              />
              <span className="rent__item-text">Sábados liberados</span>
            </li>
            <li className="rent__item">
              <FontAwesomeIcon className="rents__item-icon" icon="star" />
              <span className="rent__item-text">5.0</span>
            </li>
          </ul>
          <p className="rent__description">
            Consultório de alto padrão localizado na Av. Moinhos de Vento nº
            777, Moinhos de Vento, Porto Alegre, em frente ao Hospital Moinhos
            de Vento. Períodos de 4 horas semanais (disponibilidade de 2ª a 6ª
            feiras das 07 às 11h) Público-alvo: Médicos, Psicólogos,
            Nutricionistas, Fonoaudiólogos, Terapeutas, Coaches
          </p>
          <p className="rent__item" style={{ marginTop: '20px' }}>
            Endereço:{' '}
            <span className="rent__item-value" style={{ marginLeft: '10px' }}>
              Av. no Moinhos de Vento, 777
            </span>
          </p>
          <p className="rent__item">
            Bairro: <span className="rent__item--value">Moinhos de Vento</span>
          </p>
          <p className="rent__item">
            Cidade: <span className="rent__item--value">Porto Alegre</span>
          </p>
          <p className="rent__item">
            Preço: <span className="rent__item--value">$ 199.00</span>
          </p>
          <p className="rent__item">
            Horário:{' '}
            <span className="rent__item--value">
              Qui, 11/06 - 09:00 até Qui, 11/06 - 11:00
            </span>
          </p>
          <div className="rent__buttons">
            <button
              className="rent__btn rent__btn--danger"
              onClick={this.voltar.bind(this)}
            >
              Voltar
            </button>
            <button className="rent__btn rent__btn--success">Confirmar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Rent;
