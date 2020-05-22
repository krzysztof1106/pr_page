import React from 'react';
import {Link} from 'react-router-dom';

    
const LinksSkt = (props) => {

    return (
        <div className="nav_linkHeader">
            <Link to={props.link}>
                <div onClick={props.navHeaderClick}>{props.header}</div>
            </Link>
        </div>
    );
}

export default LinksSkt;