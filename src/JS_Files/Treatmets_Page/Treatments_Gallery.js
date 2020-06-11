import React from 'react';
import Swiper from 'react-id-swiper';
import GalleryPic from './Treatments_GalleryPic';
import GoForMore from "./Treatments_GoMore";


const TreatGallery = (props)  => {

    let screenWidth = window.innerWidth;
    let picQTY = 3;

    if(screenWidth < 769){
        picQTY = 1;
    }

    let params = {
        slidesPerView: picQTY,
        spaceBetween: 0,
        // loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false
        // },
    }

    return (
        <div className="tp_galleryMainBox">
            <Swiper {...params}>
                <div>
                    <GalleryPic picture = {props.pic1} />
                </div>
                <div>
                    <GalleryPic picture = {props.pic2} />
                </div>
                <div>
                    <GalleryPic picture = {props.pic3} />
                </div>
                <div>
                    <GalleryPic picture = {props.pic4} />
                </div>
                <div>
                    <GalleryPic picture = {props.pic5} />
                </div>
                <div>
                    <GoForMore />
                </div>
            </Swiper>
        </div>
    );
}

export default TreatGallery;