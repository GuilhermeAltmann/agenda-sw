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
                        <h4 className="rents__item-title">Sala Comercial</h4>
                        <div className="rents__item-character">
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="clone" /> <b>32m²</b></div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="toilet" /> <b>1</b> Banheiro</div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="calendar-day"/> <b>Sábados</b> liberados</div>
                            <div className="rents__item-character-item-map"><FontAwesomeIcon className="rents__item-character-icon" icon="map-marker" /> Porto Alegre, Moinhos de vento</div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="money-bill" /> R$ 50,00 valor/hr</div>
                        </div>
                    </li>
                    <li className="rents__item">
                        <h4 className="rents__item-title">Sala Comercial</h4>
                        <div className="rents__item-character">
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="clone" /> <b>32m²</b></div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="toilet" /> <b>1</b> Banheiro</div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="calendar-day"/> <b>Quintas</b> liberados</div>
                            <div className="rents__item-character-item-map"><FontAwesomeIcon className="rents__item-character-icon" icon="map-marker" /> Porto Alegre, Cristal</div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="money-bill" /> R$ 60,00 valor/hr</div>
                        </div>
                    </li>
                    <li className="rents__item">
                        <h4 className="rents__item-title">Sala Comercial em Porto Alegre</h4>
                        <div className="rents__item-character">
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="clone" /> <b>32m²</b></div>
                            <div className="rents__item-character-item"><FontAwesomeIcon className="rents__item-character-icon" icon="toilet" /> <b>1</b> Banheiro</div>
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