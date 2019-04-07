import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Rents.css'

class Rents extends Component {

    render(){

        return (

            <div className="rents__box">
                <h3 className="rents__title">Salas</h3>
                <ul className="rents">
                    <li className="rents__item">
                        <h4 className="rents__item-title">Sala Moinhos de vento</h4>
                        <div className="rents__item-character">
                            <div className="rents__item-character-item"><FontAwesomeIcon icon="toilet" /> asd</div>
                        </div>
                    </li>
                    <li className="rents__item">
                        <h4 className="rents__item-title">Sala Moinhos de vento</h4>
                        <div className="rents__item-character">
                            <div className="rents__item-character-item"><FontAwesomeIcon icon="toilet" /> asd</div>
                        </div>
                    </li>
                    <li className="rents__item">
                        <h4 className="rents__item-title">Sala Moinhos de vento</h4>
                        <div className="rents__item-character">
                            <div className="rents__item-character-item"><FontAwesomeIcon icon="toilet" /> asd</div>
                        </div>
                    </li>
                </ul>  
            </div>
        );
    }
}

export default Rents;