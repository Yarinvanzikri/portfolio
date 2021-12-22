import React from 'react';
import './Planet.scss';
function Planet(props) {
    return (
        <div className="Planet">
            <div className="planet-container">
                <div className="planet-ring2"> </div>
                <div className="planet"> </div>
                <div className="shine"> </div>
                <div className="planet-ring"> </div>
                <div className="planet-crater"> </div>
            </div>
        </div>
    );
}

export default Planet;