import React from 'react';


const TeamRow = (props)  => {
    return (
        <div className="team_rowBox">
            <div className="team_contentBox">
                <img src={props.picture} alt="Pink Room Wrocław" />
                <div className="team_styleBox"></div>
            </div>
            <div className="team_contentBox">
                <div className="HeaderStyle">
                    {props.member}
                </div>
                <div className="team_skillsBox">
                    {props.skills}
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    );
}

export default TeamRow;