import React from 'react';

//All imports
import mapPic from './img/MAPA.jpg';

const HomeMapContext = () => {

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

export default HomeMapContext;
