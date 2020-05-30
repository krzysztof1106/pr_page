import React from 'react';


const PricelistHeader = (props)  => {
    return (
        <div className="price_headerBox">
            <div className="price_headerBar"></div>
            <div className="price_header HeaderStyle">{props.header}</div>
            <div className="price_headerBar"></div>
        </div>
    );
}

export default PricelistHeader;