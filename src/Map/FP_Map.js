import React from 'react';

//All imports
import mapPic from './img/MAPA.jpg';

const Map = () => {

    return (
        <article> 
            <div className="MainContent homeMap">
                <div className="homeMapBox">
                    <img src={mapPic} alt="Flowers in Chania" />
                </div>
            </div>
        </article>
        
    );
}

export default Map;
