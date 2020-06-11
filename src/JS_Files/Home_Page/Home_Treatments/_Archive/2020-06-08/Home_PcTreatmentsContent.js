import React from 'react';

//Import
import PCTreatRow from "../../Home_PcTreatmentsRow";

import lashPic from './img/stylizacjaRzes.jpg';
import eyebrowPic from './img/stylizacjaBrwi.jpg';
import nailsPic from './img/stylizacjaPaznokci.jpg';
import hairPic from './img/styliacjaWlosow.jpg';


const HomePcTreat = (props) => {

    //Lashes
        const lashStyle = "hp_treatPcStyle_1";
        const lashHeader = "Stylizacja rzęs";
        const lashDescription = "Przedłużanie rzęs ma ułatwiać życie i podkreślać głębię oczu. Stylizacja rzęs ma na celu powiększyć oko, wydłużyć jego kąciki. Dzięki takiemu zabiegowi możemy zaoszczędzić czas na makijaż i codzienną pielęgnację rzęs.";
        const lashLink = "/zabiegi";

    //Eyebrow
        const eyebrowStyle = "hp_treatPcStyle_2";
        const eyebrowHeader = "Stylizacja brwi";
        const eyebrowDescription = "Przedłużanie rzęs ma ułatwiać życie i podkreślać głębię oczu. Stylizacja rzęs ma na celu powiększyć oko, wydłużyć jego kąciki. Dzięki takiemu zabiegowi możemy zaoszczędzić czas na makijaż i codzienną pielęgnację rzęs.";
        const eyebrowLink = "/zabiegi";

    //Nails
        const nailsStyle = "hp_treatPcStyle_3";
        const nailsHeader = "Stylizaja paznokci";
        const nailsDescription = "Przedłużanie rzęs ma ułatwiać życie i podkreślać głębię oczu. Stylizacja rzęs ma na celu powiększyć oko, wydłużyć jego kąciki. Dzięki takiemu zabiegowi możemy zaoszczędzić czas na makijaż i codzienną pielęgnację rzęs.";
        const nailsLink = "/zabiegi";

    //Hair
        const hairStyle = "hp_treatPcStyle_4";
        const hairHeader = "Zabiegi na włosy";
        const hairDescription = "Przedłużanie rzęs ma ułatwiać życie i podkreślać głębię oczu. Stylizacja rzęs ma na celu powiększyć oko, wydłużyć jego kąciki. Dzięki takiemu zabiegowi możemy zaoszczędzić czas na makijaż i codzienną pielęgnację rzęs.";
        const hairLink = "/zabiegi";


    return (
        <div className="hp_treatPcBox">
            <PCTreatRow styling={lashStyle} picture={lashPic} header={lashHeader} description={lashDescription} link={lashLink} />
            <PCTreatRow styling={eyebrowStyle} picture={eyebrowPic} header={eyebrowHeader} description={eyebrowDescription} link={eyebrowLink} />
            <PCTreatRow styling={nailsStyle} picture={nailsPic} header={nailsHeader} description={nailsDescription} link={nailsLink} />
            <PCTreatRow styling={hairStyle} picture={hairPic} header={hairHeader} description={hairDescription} link={hairLink} />
        </div>
    );
}

export default HomePcTreat;