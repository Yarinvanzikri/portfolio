import React, {useEffect} from 'react';
import { motion, useAnimation } from "framer-motion"
import {useInView} from'react-intersection-observer'
import './Skills.scss'
import SpaceShip from "../../design/SpaceShip/SpaceShip";
function Skills() {

    const {ref, inView, entry} = useInView({
        threshold: 1,
        triggerOnce: true
    });
    console.log('Skills entry: ', entry)
    console.log('Skills inView: ', inView)

    const control = useAnimation();
    const controlShip = useAnimation();

    useEffect (() => {
        console. log ("use effect hook,  skills inView =", inView);
        //-------Mobile Animation ---------
        if(window.innerWidth <= 600) {
            if (inView){
                control.start({
                    x: '-42.5vw',
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.2
                    }
                });
                controlShip.start({
                    x: '-100vw',
                    y: '-30vh',
                    rotate: 180,
                    transition: {
                        scale: 0.9, duration: 4
                    }
                });
            }
            if (!inView){
                control.start({x: '-150vw' })
                controlShip.start({
                    x: '100vw',
                    y: "-30vh",
                    rotate: 200,
                    duration: 4,
                    scale: 0.3,
                });
            }
        } else {
            //-------Desktop Animation ---------
            if (inView) {
                control.start({
                    x: '-25.5vw',
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.2
                    }
                });
                controlShip.start({
                    x: '-100vw',
                    y: '-50vh',
                    rotate: 180,
                    transition: {
                        scale: 0.9, duration: 4
                    }
                });
            }
            if (!inView) {
                control.start({x: '-150vw'})
                controlShip.start({
                    x: '100vw',
                    y: "-50vh",
                    rotate: 200,
                    duration: 4,
                    scale: 0.3,
                });
            }
        } }, [inView]);

    return (<div ref={ref}>
            <motion.div className='Skills'
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