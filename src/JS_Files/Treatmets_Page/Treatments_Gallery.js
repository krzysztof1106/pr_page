import React from 'react';
import Swiper from 'react-id-swiper';
import GalleryPic from './Treatments_GalleryPic';
import GoForMore from "./Treatments_GoMore";


const TreatGallery = (props)  => {

    let params = {
        slidesPerView: 1,
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
                    <GoForMore />
                </div>
            </Swiper>
        </div>
    );
}

export default TreatGallery;