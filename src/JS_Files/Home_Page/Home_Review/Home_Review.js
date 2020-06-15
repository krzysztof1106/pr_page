import React from 'react';
import Swiper from 'react-id-swiper';

//All imports
import Topic from "../../_Main_Components/Middle_Topic";
import ReviewSkt from "./Home_ReviewSkt";

const HomeReview = () => {

    //Reviews
    const cust_1 = "Agata Adamczyk";
    const rev_1 = "Bardzo polecam! Przemiła atmosfera i profesjonalizm 🖤";

    const cust_2 = "Emilia Madej";
    const rev_2 = "Bardzo polecam, przesympatyczna, atmosfera świetnia, rzęski piękne. 🥰💗";

    const cust_3 = "Klaudia Hałaczkiewicz";
    const rev_3 = "Najlepsza kobitka najlepiej wykonująca rzeski! Polecam mocno ❤️";

    const cust_4 = "Małgosia Bazun";
    const rev_4 = "Polecam!! Super atmosfera jak i końcowy efekt ❤️";

    const cust_5 = "Nikola Olszewská";
    const rev_5 = "Bardzo miła obsługa, a rzęsy idealne ❤️";


    //Go for more
    const mediaLink = 
        <div className="hp_revSocialMedia">
            <a href="https://www.facebook.com/pg/l.lashesstudio/reviews/?ref=page_internal" target="_blank" title="Odwiedź nas na Facebooku" rel="noopener noreferrer"><div><i className="fab fa-facebook-square" /></div></a>
            <a href="https://instagram.com/lashes_wroclaw?igshid=1isaxhcdpe5d1" target="_blank" title="Odwiedź nas na Instagramie" rel="noopener noreferrer"><div><i className="fab fa-instagram" /></div></a>
        </div>;
    const goMoreDesc = "Więcej opinii znajdziesz na naszych Social Mediach!";


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
            delay: 4000,
            disableOnInteraction: false
        },
    }


    return(
        <article className="ContentStyle ">
            <Topic topic="Opinie klientek"/>
            <Swiper {...params}>
                <div>
                    <ReviewSkt customer={cust_1} review={rev_1} />
                </div>
                <div>
                    <ReviewSkt customer={cust_2} review={rev_2} />
                </div>
                <div>
                    <ReviewSkt customer={cust_3} review={rev_3} />
                </div>
                <div>
                    <ReviewSkt customer={cust_4} review={rev_4} />
                </div>
                <div>
                    <ReviewSkt customer={cust_5} review={rev_5} />
                </div>
                <div>
                    <ReviewSkt customer={mediaLink} review={goMoreDesc} />
                </div>
            </Swiper>
        </article>
    );
};
export default HomeReview;