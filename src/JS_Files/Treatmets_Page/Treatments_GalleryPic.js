import React from 'react';


const GalleryPic = (props)  => {
    return (
        <div className="tp_galleryContent">
            <img src={props.picture} alt="PinkRoom - Wrocław" />
        </div>
    );
}

export default GalleryPic;