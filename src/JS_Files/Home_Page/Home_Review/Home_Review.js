import React from 'react';

//All imports
import Topic from "../../_Main_Components/Middle_Topic";
import ReviewSkt from "./Home_ReviewSkt";

const HomeReview = () => {

    return(
        <article className="ContentStyle ">
            <div className="hp_revMainBox">
                <div className="hp_revTopStyle"></div>
                <Topic topic="Opinie klientek"/>
                <ReviewSkt />
                <div className="hp_revBotStyle"></div>
            </div>
        </article>
    );
};

export default HomeReview;