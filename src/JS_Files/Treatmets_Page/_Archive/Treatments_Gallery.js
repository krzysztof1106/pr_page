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
                {/* <div>
                    <GalleryPic picture = {props.pic4} />
                </div>
                <div>
                    <GalleryPic picture = {props.pic5} />
                </div> */}
                <div>
                    <GoForMore />
                </div>
            </Swiper>
        </div>
    );
}

export default TreatGallery;


//CSS
// //Gallery
// .tp_galleryMainBox{
//     margin: 1.5em 0 2em 0;
//     width: 100%;
// }

// .tp_galleryContent{
//     box-sizing: border-box;
//     margin: auto;
//     padding: 0 0.75rem;

//     & img{
//         width: 100%;
//     }
// }

// .tp_goMoreMainBox{
//     position: relative;
//     box-sizing: border-box;
//     width: 100%;
//     padding-bottom: 100%;
//     background-color: $primaryColor_1;
// }

// .tp_goMoreContent{
//     position: absolute;
//     height: 50%;
//     width: 100%;
//     top: 32.5%;

//     display: grid;
//     grid-template-rows: 67% 33%;
//     align-items: center;
//     text-align: center;

//     & p{
//         font-size: 3.5em;
//     }
// }

// @media (max-width: 768px){
// //Gallery
//     .tp_galleryContent{
//         width: 80%;
//         max-width: 450px;
//         padding: 0;
//     }

//     .tp_goMoreContent{
//         & p{
//             font-size: 4.5em;
//         }
//     }
    
// }