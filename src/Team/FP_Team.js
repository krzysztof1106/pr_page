import React from 'react';

//All imports
import TeamPic from "./img/FP_TeamPic.jpg";


const Team = () => {

    return (
        <div className="MainContent homeTeamBox">
            <div className="MainBorder"></div>
            <div className="MainTopic">Nasz zespół</div>
            <div className="homeTeamContentBox">
                <div className="homeTeamStyle"></div>
                <div className="homeTeamStyle"></div>
                <div className="homeTeamPic">
                    <img src={TeamPic} alt="PinkRooom - Wrocław" />
                </div>
            </div>
        </div>
    );
}

export default Team;
