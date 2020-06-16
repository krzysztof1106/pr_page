import React from 'react';
import {Link} from 'react-router-dom';

//All imports
import HomeTeamPic from "./img/Home_TeamPic_2.jpg";


const HomeTeamCtx = () => {

    return (
        <div className="hp_teamContentnBox">
            <Link to = "/nasz-zespol">
                <img src={HomeTeamPic} alt="PinkRooom - Wrocław" />
                <div className="HeaderStyle hp_teamGFM">
                    Wejdź i poznaj nasz zespół!
                </div>
            </Link>
            <div className="hp_teamStyle"></div>
            <div className="hp_teamStyle"></div>
        </div>
    );
}

export default HomeTeamCtx;

/* <div className="IconStyle"><i class="fas fa-arrow-right"></i></div> */