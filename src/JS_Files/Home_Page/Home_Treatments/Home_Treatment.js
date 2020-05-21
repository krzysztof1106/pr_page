import React from 'react';

//Iimports
import Topic from "../../_Main_Components/Middle_Topic";
import HomePcTreat from "./Home_PcTreatmentsContent";
import HomeMobTreat from "./Home_MobTreatmentsContent";



const HomeTreatments = () => {

    return (
        <article className="ContentStyle">
            <Topic topic="Zabiegi" />
            <HomePcTreat />
            <HomeMobTreat />
        </article>
    );
}

export default HomeTreatments;
