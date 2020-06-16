import React from 'react';
import Swiper from 'react-id-swiper';

//All imports
import Topic from "../../_Main_Components/Middle_Topic";
import ReviewSkt from "./Home_ReviewSkt";

//Pictures
import Review_1 from "./img/lolek.jpg";

    //Customers
    const pic_1 = Review_1;
    const cust_1 = "Agata Adamczyk";
    const rev_1 = "Bardzo polecam! Przemiła atmosfera i profesjonalizm 🖤";

    const pic_2 = Review_1;
    const cust_2 = "Emilia Madej";
    const rev_2 = "Bardzo polecam, przesympatyczna, atmosfera świetnia, rzęski piękne. 🥰💗";

    const pic_3 = Review_1;
    const cust_3 = "Klaudia Hałaczkiewicz";
    const rev_3 = "Najlepsza kobitka najlepiej wykonująca rzeski! Polecam mocno ❤️";

    const pic_4 = Review_1;
    const cust_4 = "Małgosia Bazun";
    const rev_4 = "Polecam!! Super atmosfera jak i końcowy efekt ❤️";

    const pic_5 = Review_1;
    const cust_5 = "Nikola Olszewská";
    const rev_5 = "Bardzo miła obsługa, a rzęsy idealne ❤️";

    //Social Media
    const icon_1 = "fab fa-facebook-square";
    const link_1 = "https://www.facebook.com/pg/l.lashesstudio/reviews/?ref=page_internal";
    const icon_2 = "fab fa-instagram";
    const link_2 = "https://instagram.com/lashes_wroclaw?igshid=1isaxhcdpe5d1";
    const goMoreDesc = "Zajrzyj na nasze Social Media i zobacz więcej opinii!";

const Customer = (props) => {

    return(
        <div className=" hp_revCustBox">
            <div className="hp_revCustPic">
                <img src={props.picture} alt="" />
            </div>
            <div>
                {props.customerName}
            </div>
        </div>
    )
}

const SocialMedia = (props) => {

    return(
        <div className="hp_revSocialMedia">
            <a href={link_1} target="_blank" title="Odwiedź nas na Facebooku" rel="noopener noreferrer"><div><i className={icon_1} /></div></a>
            <a href={link_2} target="_blank" title="Odwiedź nas na Instagramie" rel="noopener noreferrer"><div><i className={icon_2} /></div></a>
        </div>
    )
}


const HomeReview = () => {

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
                    <ReviewSkt headContent={<Customer picture={pic_1} customerName={cust_1} />} review={rev_1} />
                </div>
                <div>
                    <ReviewSkt headContent={<Customer picture={pic_2} customerName={cust_2} />} review={rev_2} />
                </div>
                <div>
                    <ReviewSkt headContent={<Customer picture={pic_3} customerName={cust_3} />} review={rev_3} />
                </div>
                <div>
                    <ReviewSkt headContent={<Customer picture={pic_4} customerName={cust_4} />} review={rev_4} />
                </div>
                <div>
                    <ReviewSkt headContent={<Customer picture={pic_5} customerName={cust_5} />} review={rev_5} />
                </div>
                <div>
                    <ReviewSkt headContent={<SocialMedia />} review={goMoreDesc} />
                </div>
            </Swiper>
        </article>
    );
};
export default HomeReview;