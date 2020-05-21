/* eslint-disable react/style-prop-object */
import React from 'react';
import {Link} from 'react-router-dom';


const HomePcTreatSkt = (props) => {
    
    return (

        <div className="hp_treatPcRow">
            <div className="homeTreatPcContent">
                <div className={props.styling}></div>
                <img src={props.picture} alt="PinkRoom - Wrocław" />
            </div>
            <div className="homeTreatPcContent">
                <div className="HeaderStyle hp_treatPcTextBox">{props.header}</div>
                <div className="hp_treatPcTextBox">{props.description}</div>
                <div className="hp_treatPcMore">
                    <Link to={props.link}>
                        <div> Zobacz więcej... </div>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default HomePcTreatSkt;