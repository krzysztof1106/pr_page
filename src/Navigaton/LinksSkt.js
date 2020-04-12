import React from 'react';
import {Link} from 'react-router-dom';

    
const LinksSkt = (props) => {

    return (
        <Link to={props.link}>
            <div className="nav_linkHeader" onClick={props.navHeaderClick}>{props.header}</div>
        </Link>
    );
}

export default LinksSkt;