import React from 'react';


/* ---------- App imports ---------- */
import Header from "./Pricelist_Header";
import Tag from "./Pricelist_TagRow";

//Header
const lashes = "Stylizacja rzęs";
const name = "Zabieg";
const price = "Cena";
const time = "Czas zabiegu";
const fontWeight = "bold";

//Treatments
const name_1 = "1:1";
const price_1 = "140zł";
const time_1 = "1:30h";

const name_2 = "2:1 (2D)";
const price_2 = "170zł";
const time_2 = "1:30h"

const name_3 = "3:1 (3D)";
const price_3 = "190zł";
const time_3 = "1:30h"

const name_4 = "4:1 (4D)";
const price_4 = "200zł";
const time_4 = "2:00h"

const name_5 = "5:1 (5D)";
const price_5 = "220zł";
const time_5 = "2:00h"

const name_6 = "Max Volume (6D+)";
const price_6 = "240zł";
const time_6 = "2:30h"

const name_7 = "Lash Filler)";
const price_7 = "170zł";
const time_7 = "0:45h"

const PricelistLashes = (props)  => {
    return (
        <div className="price_contentBox">
            <Header header={lashes} />
            <Tag name={name} price={price} time={time} fontWeight={fontWeight}/>
            <Tag name={name_1} price={price_1} time={time_1} />
            <Tag name={name_2} price={price_2} time={time_2} />
            <Tag name={name_3} price={price_3} time={time_3} />
            <Tag name={name_4} price={price_4} time={time_4} />
            <Tag name={name_5} price={price_5} time={time_5}  />
            <Tag name={name_6} price={price_6} time={time_6} />
            <Tag name={name_7} price={price_7} time={time_7} />
        </div>
    );
}

export default PricelistLashes;