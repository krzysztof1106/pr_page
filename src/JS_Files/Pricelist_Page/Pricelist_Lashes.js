import React from 'react';


/* ---------- App imports ---------- */
import Header from "./Pricelist_Header";
import Tag from "./Pricelist_TagRow";


const lashes = "Stylizacja rzęs";

const name_1 = "1:1";
const price_1 = "140zł";

const name_2 = "2:1 (2D)";
const price_2 = "170zł";

const name_3 = "3:1 (3D)";
const price_3 = "190zł";

const name_4 = "4:1 (4D)";
const price_4 = "200zł";

const name_5 = "5:1 (5D)";
const price_5 = "220zł";

const name_6 = "Max Volume (6D+)";
const price_6 = "240zł";

const name_7 = "Lash Filler)";
const price_7 = "170zł";

const PricelistLashes = (props)  => {
    return (
        <div className="price_contentBox">
            <Header header={lashes} />
            <Tag name={name_1} price={price_1} />
            <Tag name={name_2} price={price_2} />
            <Tag name={name_3} price={price_3} />
            <Tag name={name_4} price={price_4} />
            <Tag name={name_5} price={price_5} />
            <Tag name={name_6} price={price_6} />
            <Tag name={name_7} price={price_7} />
        </div>
    );
}

export default PricelistLashes;