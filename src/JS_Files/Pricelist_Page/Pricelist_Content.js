import React from 'react';


/* ---------- App imports ---------- */
import Topic from "../_Main_Components/Side_Topic";
import PlContext from './Pricelist_Context';




const PricelistContent = ()  => {
    return (
        <article className="ContentStyle">
            <div className="ContentMaxWidth ContentBox">
                <Topic topic = "Cennik" />
                <PlContext />
            </div>
        </article>
    );
}

export default PricelistContent;
