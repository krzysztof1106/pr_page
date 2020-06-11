import React from 'react';
import Swiper from 'react-id-swiper';
import MobRow from '../../Homme_MobTreatmentsRow';

//Importowane zdjecia
import lashesPic from './img/stylizacjaRzes.jpg';
import eyebrowPic from './img/stylizacjaBrwi.jpg';
import nailsPic from './img/stylizacjaPaznokci.jpg';
import hairPic from './img/styliacjaWlosow.jpg';


const HomeTreatments = (props) => {

    const lashesHead = "Stylizacja rzęs";
    const lashesLink = "/zabiegi";

    const eyebrowHead = "Stylizacja brwi";
    const eyebrowLink = "/zabiegi";

    const nailsHead = "Stylizacja paznokci";
    const nailsLink = "/zabiegi";

    const hairHead = "Stylizacja wlosów";
    const hairLink = "/zabiegi";


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
        <Swiper {...params}>
            <div>
                <MobRow picture={lashesPic} header={lashesHead} link={lashesLink} />
            </div>
            <div>
                <MobRow picture={eyebrowPic} header={eyebrowHead} link={eyebrowLink} />
            </div>
            <div>
                <MobRow picture={nailsPic} header={nailsHead} link={nailsLink} />
            </div>
            <div>
                <MobRow picture={hairPic} header={hairHead} link={hairLink} />
            </div>
        </Swiper>
    );
}

export default HomeTreatments;