import React from 'react';


/* ---------- App imports ---------- */
import Header from "./Pricelist_Header";
import Tag from "./Pricelist_TagRow";


//Header
const lashes = "Stylizacja paznokci";
const name = "Zabieg";
const price = "Cena";
const time = "Czas zabiegu";
const fontWeight = "bold";

//Treatments
const name_1 = "Manicure hybrydowy";
const price_1 = "95zł";
const time_1 = "1:30h";

const name_2 = "Peicure hybrydowy";
const price_2 = "105zł";

const name_3 = "Pedicure hybrydowy SPA";
const price_3 = "130zł";

const name_4 = "Przedłużanie żelem";
const price_4 = "140zł";

const name_5 = "Uzupełnienie żelu";
const price_5 = "110zł";

const PricelistNails = (props)  => {
    return (
        <div className="price_contentBox">
            <Header header={lashes} />
            <Tag name={name} price={price} time={time} fontWeight={fontWeight}/>
            <Tag name={name_1} price={price_1} time={time_1} />
            <Tag name={name_2} price={price_2} />
            <Tag name={name_3} price={price_3} />
            <Tag name={name_4} price={price_4} />
            <Tag name={name_5} price={price_5} />
        </div>
    );
}

export default PricelistNails;