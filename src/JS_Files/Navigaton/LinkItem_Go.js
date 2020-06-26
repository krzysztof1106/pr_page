import React from 'react';
import {Link} from 'react-router-dom';

const LinkGo = (props) => {

    return (
        <div className="nav_linkHeader">
            <Link to={props.linkLink} >
                <div onClick={props.linkClick}>
                    <div>
                        {props.linkHeader}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default LinkGo;