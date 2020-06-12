import React from 'react';

//All imports
import HomeTeamPic from "./img/Home_TeamPic_1.jpg";


const HomeTeamCtx = () => {

    return (
        <div className="hp_teamContentnBox">
            <img src={HomeTeamPic} alt="PinkRooom - Wrocław" />
            <div className="hp_teamStyle"></div>
            <div className="hp_teamStyle"></div>
        </div>
    );
}

export default HomeTeamCtx;
