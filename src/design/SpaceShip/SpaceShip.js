import React from 'react';
import './SpaceShip.scss';

function SpaceShip(props) {
    return (<div className="SpaceShip-com">
            <div id="animation">
                <div className="spaceship">
                    <div className="antenna"> </div>
                    <div className="body"> </div>
                    <div className="window"> </div>
                    <div className="fins"> </div>
                    <div className="rocket"> </div>
                    <div className="fireWrapper">
                        <div className="fire">
                            <div> </div>
                            <div> </div>
                            <div> </div>
                            <div> </div>
                            <div> </div>
                            <div> </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    );
}

export default SpaceShip;