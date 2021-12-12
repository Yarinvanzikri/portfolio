import React, {useEffect} from 'react';
import { motion, useAnimation } from "framer-motion"
import {useInView} from'react-intersection-observer'
import './Description.scss'
import SpaceShip from "../../design/SpaceShip/SpaceShip";
function Description() {

    const {ref, inView, entry} = useInView({
        threshold: 1,
        triggerOnce: true
    });
    console.log('Skills entry: ', entry)
    console.log('Skills inView: ', inView)

    const control0 = useAnimation();
    const controlShip0 = useAnimation();

    useEffect (() => {
        console. log ("use effect hook,  skills inView =", inView);
        //-------Mobile Animation ---------
        if(window.innerWidth <= 600) {
            if (inView){
                control0.start({
                    x: '42.5vw',
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.3
                    }
                });
                // controlShip0.start({
                //     x: '-100vw',
                //     y: '-30vh',
                //     rotate: 180,
                //     transition: {
                //         scale: 0.9, duration: 4
                //     }
                // });
            }
            if (!inView){
                control0.start({x: '150vw' })
                // controlShip0.start({
                //     x: '100vw',
                //     y: "-30vh",
                //     rotate: 200,
                //     duration: 4,
                //     scale: 0.3,
                // });
            }
        } else {
            //-------Desktop Animation ---------
            if (inView) {
                control0.start({
                    x: '-25.5vw',
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.3
                    }
                });
                // controlShip0.start({
                //     x: '-100vw',
                //     y: '-50vh',
                //     rotate: 180,
                //     transition: {
                //         scale: 0.9, duration: 4
                //     }
                // });
            }
            if (!inView) {
                control0.start({x: '150vw'})
                // controlShip0.start({
                //     x: '100vw',
                //     y: "-50vh",
                //     rotate: 200,
                //     duration: 4,
                //     scale: 0.3,
                // });
            }
        }
         }, [inView]);


    return (<div ref={ref}>
        <motion.div className={"Description"}
                            animate={control0}>
            <div className="aboutMe">
                <h1>About Me</h1>
                <p> Junior Node.js developer, with experience in Front-end technologies such as HTML,
                    CSS, React.js as well as MongoDB, REST API, and UI/UX. Graduated from Netcraft
                    Fullstack course. Looking for entry-level roles in tech companies with
                    opportunities to learn and grow.
                </p>
            </div>
        </motion.div>
    </div>
    );
}

export default Description;