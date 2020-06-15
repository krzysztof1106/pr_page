import React from 'react';


const HomeReviewSkt = (props) => {
    return (
        <div className="hp_revContent">
            <div className="HeaderStyle hp_revCustomerBox">
                {props.customer}
            </div>
            <div className="hp_revReviewBox">
                {props.review}
            </div>
        </div>
    );
}

export default HomeReviewSkt;
