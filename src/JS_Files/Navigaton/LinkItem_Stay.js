import React from 'react';

const LinkStay = (props) => {

    return (
        <div className="nav_linkHeader">
                <div onClick={props.linkClick}>
                    <div>
                        {props.linkHeader}
                    </div>
                </div>
        </div>
    );
}

export default LinkStay;