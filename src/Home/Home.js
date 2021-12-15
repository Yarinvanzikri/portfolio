import React from 'react';
import Space from "../design/Space/Space";
import Introduction from "../data/Introduction/Introduction";
import Description from "../data/Description/Description";
import Skills from "../data/Skills/Skills";
import MyWork from "../data/MyWork/MyWork";
import ContactMe from "../data/ContactMe/ContactMe";
import {motion} from "framer-motion";
import SpaceShip from "../design/SpaceShip/SpaceShip";
import Planet from "../design/Planet/Planet";
import './Home.scss'
import LInkButtons from "../Limks/LinkButtons/LInkButtons";
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
                        initial={{ x: '-100vw' , y:'-150vh',scale: 0.1, rotate: 0}}
                        animate={{ x: '100vw', y:'-100vh' ,scale: 0.9,rotate: 50} }
                        transition={{duration: 6}}>
                        <SpaceShip/>
                    </motion.div>
                    :
                    <motion.div
                        initial={{ x: '-100vw' , y:'-170vh',scale: 0.1, rotate: 0}}
                        animate={{ x: '100vw', y:'-100vh' ,scale: 0.9,rotate: 50} }
                        transition={{duration: 4}}>
                        <SpaceShip/>
                    </motion.div> }
                {(window.innerWidth >= 600) ?
                    <motion.div
                        initial={{y: '200vh', x: "40vw"}}
                        animate={{y: '-150vh', x: '40vw' }}
                        transition={{ type: "spring", duration: 4, bounce: 0.3, delay: 4}}>
                        <Planet/>
                    </motion.div>
                    :
                    <motion.div
                        initial={{y: '200vh', x: "-5vw", scale: 0.3}}
                        animate={{y: '-145vh', x: '-5vw' ,scale: 0.6}}
                        transition={{ type: "spring", duration: 4, bounce: 0.2, delay: 3.5}}>
                        <Planet/>
                    </motion.div>
                }
                <div>
                    <LInkButtons />
                </div>
            </div>
        </div>
    );
}

export default Home;