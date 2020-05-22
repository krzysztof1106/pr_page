import React from 'react';


/* ---------- App imports ---------- */
import Topic from "../_Main_Components/Side_Topic";
import PlContext from './Pricelist_Context';




const PricelistContent = ()  => {
    return (
        <article className="ContentStyle">
            <Topic topic = "Cennik" />
            <PlContext />
        </article>
    );
}

export default PricelistContent;
