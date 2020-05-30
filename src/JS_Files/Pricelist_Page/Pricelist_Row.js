import React from 'react';


/* ---------- App imports ---------- */




const PricelistRow = (props)  => {
    return (
        <div className="price_contentBox">
            <div className="price_row">
                <div className="price_headerBar"></div>
                <div className="price_headerBox HeaderStyle">{props.header}</div>
                <div className="price_headerBar"></div>
            </div>
            <div className="price_row">
                <div className="price_tagContent">keratynowe prostowanie włosów</div>
                <div className="price_tagBar"></div>
                <div className="price_tagContent">100zł</div>
            </div>
            <div className="price_row">
                <div className="price_tagContent">1:1</div>
                <div className="price_tagBar"></div>
                <div className="price_tagContent">100zł</div>
            </div>
            <div className="price_row">
                <div className="price_tagContent">3:1</div>
                <div className="price_tagBar"></div>
                <div className="price_tagContent">100zł</div>
            </div>
            <div className="price_row">
                <div className="price_tagContent">4:1</div>
                <div className="price_tagBar"></div>
                <div className="price_tagContent">100zł</div>
            </div>
        </div>
    );
}

export default PricelistRow;
