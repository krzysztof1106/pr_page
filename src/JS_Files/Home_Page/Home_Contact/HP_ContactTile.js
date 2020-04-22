import React from 'react';


const HPContactTile = (props) => {

    return (

        <div className="homeContactTile">
        <div className="MainIcon"><i className={props.icon}></i></div>
        <div className="MainHeader homeContactHeader">
            {props.header}
        </div>
        <div className="MainDescription homeContactDes">{props.description}</div>
    </div>

    );
}

export default HPContactTile;
