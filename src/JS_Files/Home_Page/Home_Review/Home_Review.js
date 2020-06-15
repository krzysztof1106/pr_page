import React from 'react';
import Swiper from 'react-id-swiper';

//All imports
import Topic from "../../_Main_Components/Middle_Topic";
import ReviewSkt from "./Home_ReviewSkt";

const HomeReview = () => {

    const cust_1 = "Agata Adamczyk";
    const rev_1 = "Bardzo polecam! Przemiła atmosfera i profesjonalizm 🖤";


    //Swiper parameters
    let screenWidth = window.innerWidth;
    let slides = 3;

    if (screenWidth < 769){
        slides = 1;
    }

    const params = {
        slidesPerView: slides,
        loop: true,
        pagination: {
            spaceBetween: 30,
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
    }


    return(
        <article className="ContentStyle ">
            <Topic topic="Opinie klientek"/>
            <div className="hp_revMainBox">
                <Swiper {...params}>
                    <div>
                        <ReviewSkt customer={cust_1} review={rev_1} />
                    </div>
                    <div>
                        <ReviewSkt customer={cust_1} review={rev_1} />
                    </div>
                    <div>
                        <ReviewSkt customer={cust_1} review={rev_1} />
                    </div>
                    <div>
                        <ReviewSkt customer={cust_1} review={rev_1} />
                    </div>
                    <div>
                        <ReviewSkt customer={cust_1} review={rev_1} />
                    </div>
                </Swiper>
            </div>
        </article>
    );
};
export default HomeReview;