import React from 'react';


const PricelistTag = (props)  => {
    return (
        <div className="price_tagRow">
            <div className="price_tagContent">{props.name}</div>
            <div className="price_tagContent">{props.price}</div>
        </div>
    );
}

export default PricelistTag;