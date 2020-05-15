import React from 'react';

//All imports
import Topic from "../../_Main_Components/Middle_Topic";
import HomeTeamCtx from "./Home_TeamContext";

const HomeTeamCtn = () => {

    return(
        <article>
            <Topic topic="Nasz zespół" />
            <HomeTeamCtx />
        </article>
    );
};

export default HomeTeamCtn;