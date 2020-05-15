import React from 'react';
import {Link} from 'react-router-dom';


const HomePcTreatSkt = (props) => {
    
    return (
                    
        <div className="homeTreatPcRow">
            <div className="homeTreatPcContent">
                <div className={props.styling}></div>
                <img src={props.picture} alt="PinkRoom - Wrocław" />
            </div>
            <div className="homeTreatPcContent">
                <div className="MainHeader">{props.header}</div>
                <div className="MainDescription homeTreatPcDescription">{props.description}</div>
                <div>
                    <Link to={props.link}>
                        <div className="MainDescription homeTreatGoForMore">
                            Zobacz więcej...
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}

export default HomePcTreatSkt;