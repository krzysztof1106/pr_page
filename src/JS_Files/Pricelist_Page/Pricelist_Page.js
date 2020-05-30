import React from 'react';


/* ---------- App imports ---------- */
import Topic from "../_Main_Components/Side_Topic";
import PlRow from './Pricelist_Row';


    const header_1 = "Stylizacja rzęs"

    const header_2 = "Stylizacja brwi"

    const header_3 = "Stylizacja paznokci"



const Pricelist = (props)  => {
    return (
        <article className="ContentStyle">
            <div className="ContentMaxWidth ContentBox">
                <Topic topic = "Cennik" />
                <div className="price_mainBox">
                    <PlRow header={header_1}/>
                    <PlRow header={header_2}/>
                    <PlRow header={header_3}/>
                </div>
            </div>
        </article>
    );
}

export default Pricelist;
