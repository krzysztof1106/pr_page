import React from 'react';


const PricelistTag = (props)  => {
    return (
        <div className="price_tagRow">
            <div className="price_tagContent" style={{fontWeight: props.fontWeight}}>{props.name}</div>
            <div className="price_tagContent" style={{fontWeight: props.fontWeight}}>
                <div>{props.price}</div>
                <div>{props.time}</div>
            </div>
        </div>
    );
}

export default PricelistTag;