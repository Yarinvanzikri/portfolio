import React from 'react';
import './Meteor.scss';

function Meteor() {
    const height = Math.floor(Math.random()*150);
    return (
        <div className="Meteor" style={{top: `${height}vh` }}>
            <div className="meteor-container">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>


            <div className="meteor-container-2">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Meteor;