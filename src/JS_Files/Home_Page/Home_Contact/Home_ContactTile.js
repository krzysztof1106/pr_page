import React from 'react';


const HPContactTile = (props) => {

    return (

        <div className="hp_contactTile">
            <div className="IconStyle"><i className={props.icon}></i></div>
                <a href={props.link} target="_blank" rel="noopener noreferrer" title={props.title}>
                    <div className="HeaderStyle hp_contactHeader">{props.name}</div>
                    <div>{props.description}</div>
                </a>
        </div>

    );
}

export default HPContactTile;