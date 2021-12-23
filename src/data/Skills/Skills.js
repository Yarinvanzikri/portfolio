import React, {useEffect} from 'react';
import { motion, useAnimation } from "framer-motion"
import {useInView} from'react-intersection-observer'
import './Skills.scss'
import SpaceShip from "../../design/SpaceShip/SpaceShip";
function Skills() {

    const observer1 = useInView({
        threshold: 0.9,
        triggerOnce: true
    });
    const control = useAnimation();
    const controlShip = useAnimation();

    useEffect (() => {
        //-------Mobile Animation ---------
        if(window.innerWidth <= 600) {
            if (observer1.inView){
                control.start({
                    x: '0',
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.2
                    }
                });
                controlShip.start({
                    x: '-110vw',
                    y: '-30vh',
                    rotate: 180,
                    transition: {
                        scale: 0.9, duration: 3
                    }
                });
            }
            if (!observer1.inView){
                control.start({x: '-100vw' })
                controlShip.start({
                    x: '110vw',
                    y: "-30vh",
                    rotate: 200,
                    duration: 3,
                    scale: 0.3,
                });
            }
        } else {
            //-------Desktop Animation ---------
            if (observer1.inView) {
                control.start({
                    x: 0,
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.2
                    }
                });
                controlShip.start({
                    x: '-110vw',
                    y: '-15vh',
                    rotate: 180,
                    transition: {
                        scale: 0.9, duration: 4
                    }
                });
            }
            if (!observer1.inView) {
                control.start({x: '-100vw'})
                controlShip.start({
                    x: '110vw',
                    y: "-17vh",
                    rotate: 200,
                    duration: 4,
                    scale: 0.3,
                });
            }
        } }, [observer1.inView, observer1.ref, control, controlShip]);

    return (<div ref={observer1.ref} className='Skills_main'>
            <motion.div
                className='Skills'
                        animate={control}>
                <div className="mySkills">
                    <h1>My Skills</h1>
                    <p>
                        Javascript, jQuery, CSS3, SAAS, HTML5, Git, React.js, Node.js, MongoDB, Mongoose,
                        REST API, Web Accessibility, Responsiveness.
                        Working with Webpack, Chrome DevTools, Webstorm, Visual Studio Code, etc.</p>
                </div>
                <div className="skillsBar">
                    <div>
                        <li>
                            <h3>HTML5</h3><span className="bar"> <span className="html"> </span></span>
                        </li>
                        <li>
                            <h3>CSS3</h3><span className="bar"> <span className="css"> </span></span>
                        </li>
                        <li>
                            <h3>JAVASCRIPT</h3><span className="bar"> <span className="javascript"> </span></span>
                        </li>
                    </div>
                    <div>
                        <li>
                            <h3>NODE.JS</h3><span className="bar"> <span className="node"> </span></span>
                        </li>
                        <li>
                            <h3>REACT.JS</h3><span className="bar"> <span className="react"> </span></span>
                        </li>
                        <li>
                            <h3>GIT</h3><span className="bar"> <span className="git"> </span></span>
                        </li>
                    </div>


                </div>
            </motion.div>

            <motion.div
                animate={controlShip}
            >
                <SpaceShip/>
            </motion.div>
    </div>



    );
}

export default Skills;