import React from 'react';

//All imports
import mapPic from './img/MAPA.jpg';

const HomeMapContext = () => {

    return (
        <div className="hp_mapMainBox">
            <div className="hp_mapContentBox">
                <img src={mapPic} alt="Flowers in Chania" />
            </div>
        </div>
        
    );
}

export default HomeMapContext;
