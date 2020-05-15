import React from 'react';


const MiddleTopic = (props) => {

    return (
        <div className="TopicStyle TopicMiddleBox">
            <div className="TopicMiddleBeam"></div>
            <div className="TopicMiddleText">{props.topic}</div>
            <div className="TopicMiddleBeam"></div>
        </div>
    );
}

export default MiddleTopic;
