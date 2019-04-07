import React, { Component } from 'react';

import './Rent.css';
import workRoom from '../../../assets/img/workroom.jpg';

class Rent extends Component {
  render() {
    return (
      <div className="rent">
        <div className="rent__data">
          <img className="rent__image" src={workRoom} alt="Work Room" />
          <h3 className="rent__title">Sala no Moinhos de Vento</h3>
          <p className="rent__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            voluptates modi corrupti ducimus possimus iste porro quia laboriosam
            quam autem.
          </p>
          <p className="rent__locatario">
            Locatário:{' '}
            <span className="rent__locatario--name">Paulo da Silva Sauro</span>
          </p>
          <p className="rent__item">
            Endereço:{' '}
            <span className="rent__item-value">
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
            <button className="rent__btn rent__btn--danger">Voltar</button>
            <button className="rent__btn rent__btn--success">Confirmar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Rent;
