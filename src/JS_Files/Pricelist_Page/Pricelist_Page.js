import React from 'react';


/* ---------- App imports ---------- */
import Topic from "../_Main_Components/Side_Topic";
import Lashes from "./Pricelist_Lashes";
import Eyebrow from "./Pricelist_Eyebrow";
import Nails from "./Pricelist_Nails";



const Pricelist = (props)  => {
    return (
        <article className="ContentStyle">
            <div className="ContentMaxWidth ContentBox">
                <Topic topic = "Cennik" />
                <div className="price_mainBox">
                    <Lashes />
                    <Eyebrow />
                    <Nails />
                </div>
            </div>
        </article>
    );
}

export default Pricelist;
