import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clinica from '../../assets/img/clinica.jpg';

import './Rents.css';

class Rents extends Component {
  detalhar = () => {
    this.props.history.push('rent');
  };

  render() {
    return (
      <div className="rents__box">
        <div className="rents__form-box">
          <div className="rents__form-search">
            <input
              type="text"
              placeholder="Pesquisar"
              className="rents__form-input"
            />
            <button className="rents__btn rents__btn--search">
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </div>
        <h2 className="rents__title">Salas</h2>
        <ul className="rents">
          <li className="rents__item" onClick={this.detalhar.bind(this)}>
            <div className="rents__item-header">
              <div className="rents__item-image-space">
                <div className="rents__item-image">
                  <img src={clinica} alt="Clinica" width="100" height="100" />
                </div>
              </div>
              <div className="rents__contents">
                <div className="rents__item-contents-header">
                  <h4 className="rents__item-title">Sala Comercial</h4>
                  <span className="rents__score yellow">
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    5.0
                  </span>
                </div>
                <div className="rents__item-character">
                  <div className="rents__item-character-box">
                    <div className="rents__item-character-item bold">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="money-bill"
                      />{' '}
                      R$ 30,00 valor/hr
                    </div>
                    <div className="rents__item-character-item-area">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="clone"
                      />{' '}
                      <b>20m²</b>
                    </div>
                  </div>
                  <div className="rents__item-character-box">
                    <div className="rents__item-character-item-day">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="calendar-day"
                      />{' '}
                      <b>Sábado</b> liberado
                    </div>
                    <div className="rents__item-character-item-map">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="map-marker"
                      />{' '}
                      Porto Alegre, Moinhos de vento
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="rents__item" onClick={this.detalhar.bind(this)}>
            <div className="rents__item-header">
              <div className="rents__item-image-space">
                <div className="rents__item-image">
                  <img src={clinica} alt="Clinica" width="100" height="100" />
                </div>
              </div>
              <div className="rents__contents">
                <div className="rents__item-contents-header">
                  <h4 className="rents__item-title">Sala Comercial</h4>
                  <span className="rents__score yellow">
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star-half-alt"
                    />
                    3.5
                  </span>
                </div>
                <div className="rents__item-character">
                  <div className="rents__item-character-box">
                    <div className="rents__item-character-item bold">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="money-bill"
                      />{' '}
                      R$ 50,00 valor/hr
                    </div>
                    <div className="rents__item-character-item-area">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="clone"
                      />{' '}
                      <b>32m²</b>
                    </div>
                  </div>
                  <div className="rents__item-character-box">
                    <div className="rents__item-character-item-day">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="calendar-day"
                      />{' '}
                      <b>Todas Quintas</b> liberadas
                    </div>
                    <div className="rents__item-character-item-map">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="map-marker"
                      />{' '}
                      Porto Alegre, Moinhos de vento
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="rents__item" onClick={this.detalhar.bind(this)}>
            <div className="rents__item-header">
              <div className="rents__item-image-space">
                <div className="rents__item-image">
                  <img src={clinica} alt="Clinica" width="100" height="100" />
                </div>
              </div>
              <div className="rents__contents">
                <div className="rents__item-contents-header">
                  <h4 className="rents__item-title">Sala Comercial</h4>
                  <span className="rents__score yellow">
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star"
                    />
                    <FontAwesomeIcon
                      className="rents__item-character-icon"
                      icon="star-half-alt"
                    />
                    4.5
                  </span>
                </div>
                <div className="rents__item-character">
                  <div className="rents__item-character-box">
                    <div className="rents__item-character-item bold">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="money-bill"
                      />{' '}
                      R$ 45,00 valor/hr
                    </div>
                    <div className="rents__item-character-item-area">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="clone"
                      />{' '}
                      <b>25m²</b>
                    </div>
                  </div>
                  <div className="rents__item-character-box">
                    <div className="rents__item-character-item-day">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="calendar-day"
                      />{' '}
                      <b>Terça</b> liberado
                    </div>
                    <div className="rents__item-character-item-map">
                      <FontAwesomeIcon
                        className="rents__item-character-icon"
                        icon="map-marker"
                      />{' '}
                      Porto Alegre, Moinhos de vento
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Rents;
