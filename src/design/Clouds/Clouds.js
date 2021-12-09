import React from 'react';
import './Clouds.scss'
import Space from "../Space/Space";

function Clouds(props) {
    return (<div className="Clouds" >
            <div className="clouds group1">
                <div className="left">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="right">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="clouds group2">
                <div className="left">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="right">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Clouds;