import React from 'react';


const HPContactTile = (props) => {

    return (

        <div className="homeContactTile">
        <div className="MainIcon"><i className={props.icon}></i></div>
        <div className="MainHeader homeContactHeader">
            <a href={props.link} target="_blank" rel="noopener noreferrer" title={props.title}>
                <div>{props.name}</div>
            </a>
        </div>
        <div className="MainDescription homeContactDes">{props.description}</div>
    </div>

    );
}

export default HPContactTile;