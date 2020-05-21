import React from 'react';

//All imports
import Topic from "../../_Main_Components/Middle_Topic";
import HomeTeamCtx from "./Home_TeamContext";

const HomeTeam = () => {

    return(
        <article className="ContentStyle">
            <Topic topic="Nasz zespół" />
            <HomeTeamCtx />
        </article>
    );
};

export default HomeTeam;