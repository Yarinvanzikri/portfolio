import React from 'react';
import './Thanks.scss'
import Space from "../design/Space/Space";
import SpaceShip from "../design/SpaceShip/SpaceShip";
import {Link} from "react-router-dom";
function Thanks(props) {
    return (
        <div className="Thanks">
            <Space/>
            <div className={'Thanks__Titles'}>
                <h1> Thank You For Contacting Me</h1>
                <h3> I Will Make Sure To Replay As Soon As Possible</h3>
            </div>
            <div className='shipLink'>
                <Link to={'/'}>
                    <SpaceShip/>
                </Link>
            </div>


        </div>
    );
}

export default Thanks;