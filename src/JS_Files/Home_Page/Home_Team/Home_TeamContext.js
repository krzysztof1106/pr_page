import React from 'react';

//All imports
import HomeTeamPic from "./img/Home_TeamPic_1.jpg";


const HomeTeamCtx = () => {

    return (
        <div className="MainContent homeTeamBox">
            <div className="homeTeamContentBox">
                <div className="homeTeamStyle"></div>
                <div className="homeTeamStyle"></div>
                <div className="homeTeamPic">
                    <img src={HomeTeamPic} alt="PinkRooom - Wrocław" />
                </div>
            </div>
        </div>
    );
}

export default HomeTeamCtx;
