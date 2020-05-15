import React from 'react';


const MiddleTopic = (props) => {

    return (
        <div className="TopicStyle TopicSideBox">

            <div className="TopicSideText">{props.topic}</div>
            <div className="TopicSideBeam"></div>
        </div>
    );
}

export default MiddleTopic;
