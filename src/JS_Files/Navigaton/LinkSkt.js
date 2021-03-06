import React from 'react';
import {Link} from 'react-router-dom';

    
const LinksSkt = (props) => {

    return (
        <div className="nav_linkHeader">
            <Link to={props.link} >
                <div onClick={props.navHeaderClick}>
                    <div>
                        {props.header}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default LinksSkt;