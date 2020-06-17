import React from 'react';
import Swiper from 'react-id-swiper';


const GoForMore = ()  => {
    return (
        <div className="tp_goMorePicOpacity tp_galleryContent">
            <a href="https://instagram.com/lashes_wroclaw?igshid=1isaxhcdpe5d1" target="_blank" title="Zobacz więcej naszych prac" rel="noopener noreferrer">
                <div className="tp_goMoreMainBox">
                    <div className="tp_goMoreContent HeaderStyle">
                        <p>
                            <i className="fas fa-arrow-right"></i>
                        </p>
                        <div>Zobacz więcej naszych prac</div>
                    </div>
                </div>
            </a>
        </div>
    );
}

const GalleryPic = (props)  => {
    return (
        <div className="tp_galleryContent">
            <img src={props.picture} alt="PinkRoom - Wrocław" />
        </div>
    );
}

const TreatGallery = (props)  => {

    let params = {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }

    return (
        <div className="tp_galleryMainBox">
            <Swiper {...params}>
                <div>
                    <GalleryPic picture = {props.pic_1} />
                </div>
                <div>
                    <GalleryPic picture = {props.pic_2} />
                </div>
                <div>
                    <GalleryPic picture = {props.pic_3} />
                </div>
                <div>
                    <GoForMore />
                </div>
            </Swiper>
        </div>
    );
}

export default TreatGallery;