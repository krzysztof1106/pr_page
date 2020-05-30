import React from 'react';


/* ---------- App imports ---------- */
import Header from "./Pricelist_Header";
import Tag from "./Pricelist_TagRow";


const lashes = "Stylizacja brwi";

const name_1 = "Henna pudrowa";
const price_1 = "90zł";

const name_2 = "Henna ziołowa";
const price_2 = "140zł";

const name_3 = "Makijaż permanentny";
const price_3 = "700zł";


const PricelistEyebrow = (props)  => {
    return (
        <div className="price_contentBox">
            <Header header={lashes} />
            <Tag name={name_1} price={price_1} />
            <Tag name={name_2} price={price_2} />
            <Tag name={name_3} price={price_3} />
        </div>
    );
}

export default PricelistEyebrow;