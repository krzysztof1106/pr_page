import React from 'react';
import Swiper from 'react-id-swiper';

//Iimports
import Topic from "../../_Main_Components/Middle_Topic";
import MobRow from './Homme_MobTreatmentsRow';
import PCTreatRow from "./Home_PcTreatmentsRow";
//import HomePcTreat from "./Home_PcTreatmentsContent";
//import HomeMobTreat from "./Home_MobTreatmentsContent";


//Importowane zdjecia
import lashesPic from './img/stylizacjaRzes.jpg';
import eyebrowPic from './img/stylizacjaBrwi.jpg';
import nailsPic from './img/stylizacjaPaznokci.jpg';
import hairPic from './img/styliacjaWlosow.jpg';


const HomeTreatments = (props) => {

    //Content
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

    //Swiper parameters
    //Mobile
        const params = {
            slidesPerView: 1,
            loop: true,
            pagination: {
                spaceBetween: 30,
                el: '.swiper-pagination',
                clickable: true,
                //dynamicBullets: true
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
        }

    return (
        <article className="ContentStyle">
            <Topic topic="Zabiegi" />

            <div className="hp_treatPcBox">
                <PCTreatRow styling={lashStyle} picture={lashesPic} header={lashHeader} description={lashDescription} link={lashLink} />
                <PCTreatRow styling={eyebrowStyle} picture={eyebrowPic} header={eyebrowHeader} description={eyebrowDescription} link={eyebrowLink} />
                <PCTreatRow styling={nailsStyle} picture={nailsPic} header={nailsHeader} description={nailsDescription} link={nailsLink} />
                <PCTreatRow styling={hairStyle} picture={hairPic} header={hairHeader} description={hairDescription} link={hairLink} />
            </div>
            
            <div className="hp_treatMobileBox">
                <Swiper {...params}>
                    <div>
                        <MobRow picture={lashesPic} header={lashHeader} link={lashLink} />
                    </div>
                    <div>
                        <MobRow picture={eyebrowPic} header={eyebrowHeader} link={eyebrowLink} />
                    </div>
                    <div>
                        <MobRow picture={nailsPic} header={nailsHeader} link={nailsLink} />
                    </div>
                    <div>
                        <MobRow picture={hairPic} header={hairHeader} link={hairLink} />
                    </div>
                </Swiper>
            </div>
        </article>
    );
}

export default HomeTreatments;
