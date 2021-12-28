import React from 'react';
import Space from "../design/Space/Space";
import Introduction from "../data/Introduction/Introduction";
import Description from "../data/Description/Description";
import Skills from "../data/Skills/Skills";
import MyWork from "../data/MyWork/MyWork";
import ContactMe from "../data/ContactMe/ContactMe";
import {motion} from "framer-motion";
import SpaceShip from "../design/SpaceShip/SpaceShip";
import './Home.scss'

function Home() {
    return (
        <div className="Home" >
            <Space/>
            <div className="Home__mainHeader">
                <Introduction />
                <Description/>
                <Skills />
                <MyWork />
                <ContactMe/>

                {(window.innerWidth >= 600) ?
                    <motion.div
                        initial={{ x: '-100vw' , y:'-280vh',scale: 0.1, rotate: 0}}
                        animate={{ x: '100vw', y:'-200vh' ,scale: 0.9,rotate: 50} }
                        transition={{duration: 3}}>
                        <SpaceShip/>
                    </motion.div>
                    :
                    <motion.div
                        initial={{ x: '-100vw' , y:'-350vh',scale: 0.1, rotate: 0}}
                        animate={{ x: '100vw', y:'-300vh' ,scale: 0.9,rotate: 50} }
                        transition={{duration: 2}}>
                        <SpaceShip/>
                    </motion.div> }
            </div>
        </div>
    );
}

export default Home;