import React from 'react';


const HomeHeader = (props) => {

    return (
        <div className="TopicStyle hp_topicMainBox">
            <div className="hp_topicBeam"></div>
            <div className="hp_topicText">{props.topic}</div>
            <div className="hp_topicBeam"></div>
        </div>
    );
}

export default HomeHeader;
