import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Rents.css'

class Rents extends Component {

    render(){

        return (

            <div className="rents__box">
                <h2 className="rents__title">Salas</h2>
                <ul className="rents">
                    <li className="rents__item">
                        <div className="rents__item-header">
                            <h4 className="rents__item-title">Sala Comercial</h4>
                            <span className="rents__score yellow">
                                <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                5.0
                            </span>
                        </div>
                        <div className="rents__item-character">
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="clone" /> <b>32m²</b></div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="car" /> <b>1</b> Vaga</div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="calendar-day"/> <b>Sábados</b> liberados</div>
                            <div className="rents__item-character-item-map"><FontAwesomeIcon className="rents__item-character-icon" icon="map-marker" /> Porto Alegre, Moinhos de vento</div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="money-bill" /> R$ 50,00 valor/hr</div>
                        </div>
                    </li>
                    <li className="rents__item">
                        <div className="rents__item-header">
                            <h4 className="rents__item-title">Sala Comercial</h4>
                                <span className="rents__score yellow">
                                    <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                    <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                    <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                    <FontAwesomeIcon className="rents__item-character-icon yellow" icon="star-half-alt"/> 
                                    3.5
                                </span>
                        </div>
                        <div className="rents__item-character">
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="clone" /> <b>15m²</b></div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="car" /> <b>1</b> Vaga</div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="calendar-day"/> <b>Quintas</b> liberados</div>
                            <div className="rents__item-character-item-map"><FontAwesomeIcon className="rents__item-character-icon" icon="map-marker" /> Porto Alegre, Cristal</div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="money-bill" /> R$ 60,00 valor/hr</div>
                        </div>
                    </li>
                    <li className="rents__item">
                        <div className="rents__item-header">
                            <h4 className="rents__item-title">Sala Comercial</h4>
                            <span className="rents__score yellow">
                                <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                <FontAwesomeIcon className="rents__item-character-icon" icon="star"/> 
                                <FontAwesomeIcon className="rents__item-character-icon yellow" icon="star-half-alt"/>
                                4.5
                            </span>
                        </div>
                        <div className="rents__item-character">
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="clone" /> <b>20m²</b></div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="car" /> <b>Não informado</b></div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="calendar-day"/> <b>Terças</b> liberados</div>
                            <div className="rents__item-character-item-map"><FontAwesomeIcon className="rents__item-character-icon" icon="map-marker" /> Porto Alegre, Floresta</div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="money-bill" /> R$ 30,00 valor/hr</div>
                        </div>
                    </li>
                </ul>  
            </div>
        );
    }
}

export default Rents;