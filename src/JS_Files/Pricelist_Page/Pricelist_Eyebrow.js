import React from 'react';


/* ---------- App imports ---------- */
import Header from "./Pricelist_Header";
import Tag from "./Pricelist_TagRow";


//Header
const lashes = "Stylizacja brwi";
const name = "Zabieg";
const price = "Cena";
const time = "Czas zabiegu";
const fontWeight = "bold";

//Treatments
const name_1 = "Henna pudrowa";
const price_1 = "90zł";
const time_1 = "1:30h";

const name_2 = "Henna ziołowa";
const price_2 = "140zł";

const name_3 = "Makijaż permanentny";
const price_3 = "700zł";


const PricelistEyebrow = (props)  => {
    return (
        <div className="price_contentBox">
            <Header header={lashes} />
            <Tag name={name} price={price} time={time} fontWeight={fontWeight}/>
            <Tag name={name_1} price={price_1} time={time_1} />
            <Tag name={name_2} price={price_2} time={time_1} />
            <Tag name={name_3} price={price_3} time={time_1} />
        </div>
    );
}

export default PricelistEyebrow;