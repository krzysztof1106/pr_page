import React from 'react';


const TreatRow = (props)  => {
    return (
        <div className="tp_rowBox">
            <div className="tp_contentBox">
                {props.gallery}
                <div className="tp_styleBox"></div>
            </div>
            <div className="tp_contentBox">
                {props.content}
                {props.drop_1}
                {props.drop_2}
                {props.drop_3}
            </div>
        </div>
    );
}

export default TreatRow;



