import React from 'react';
import {Link} from 'react-router-dom';


const HomeTreatRow = (props) => {

    return (

        <div className="hp_treatMobTile">

            <div className="hp_treatMobileRow">
                <div className="hp_treatMobileStyle"></div>
                

                <div className="hp_treatMobilePic">
                    <img src={props.picture} alt="PinkRoom - Wrocław" />
                </div>

            </div>
            <Link to = {props.link}>
                <div className="HeaderStyle hp_treatMobileHeader"> {props.header} </div>

                <div>Zobacz więcej...</div>
            </Link>

        </div>
    );
}

export default HomeTreatRow;
