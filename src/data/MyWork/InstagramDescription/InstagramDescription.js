import React from 'react';
import './InstagramDescription.scss';
import Space from "../../../design/Space/Space";
import {Link} from "react-router-dom";
import SpaceShip from "../../../design/SpaceShip/SpaceShip";
function InstagramDescription() {
    return (
        <div className="InstagramDescription">
            <Space/>
            <div className="InstagramDescription__text">
                <h1> Instagram Project Description </h1>
                <p>
                   This project Was The Final Project At the Netcraft Academy Full Stack Course .<br />
                    i Choose to go with basic design and to be more focused on the functionality.
                    So the features i have implanted at this project were :
                        <ul>
                            <li>
                                authentication system with jwt.<br/>
                                the authentication is a middleware which determines what parts of the website you can use.
                            </li>
                            <li>
                                the ability to control posts in case you are the author.
                            </li>
                            <li>
                                the ability to control comments in case you are the author, or the the post publisher.
                            </li>
                            <li>
                                the ability to upload  & preview pictures with fully functioning pure JS & CSS filter component.
                            </li>
                            <li>
                                the ability to follow other users And to see them in your feed.
                            </li>
                            <li>
                                the ability to explore  posts published by others which you are not following.
                            </li>
                            <li>
                                responsiveness
                            </li>
                            <li>
                                fully connected to mongodb
                            </li>
                        </ul>
                </p>
            </div>
            <div className={'goBackShip'}>
                <Link to={'/'}>
                    <SpaceShip/>
                </Link>
            </div>

        </div>
    );
}

export default InstagramDescription;