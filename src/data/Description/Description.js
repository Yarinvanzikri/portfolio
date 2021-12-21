import React, {useEffect} from 'react';
import { motion, useAnimation } from "framer-motion"
import {useInView} from'react-intersection-observer'
import './Description.scss'
function Description() {

    const observer = useInView({
        threshold: 0.9,
        triggerOnce: true
    });
    console.log('Skills entry: ', observer.entry)
    console.log('Skills inView: ', observer.inView)
    console.log(window.scrollY)

    const control0 = useAnimation();

    useEffect (() => {
        console. log ("use effect hook,  skills inView =", observer.inView);
        //-------Mobile Animation ---------
        if(window.innerWidth <= 600) {
            if (observer.inView){
                control0.start({
                    x: 0,
                    transition: {
                        type: 'spring',
                        duration: 1.5,
                        bounce: 0.2
                    }
                });
            }
            if (!observer.inView){
                control0.start({x: '100vw' })
            }
        } else {
            //-------Desktop Animation ---------
            if (observer.inView) {
                control0.start({
                    x: 0,
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.2
                    }
                });
            }
            if (!observer.inView) {
                control0.start({x: '100vw'});
            }
        }
         }, [observer.inView, observer.ref]);


    return (<div ref={observer.ref} className={"Description_main"}>
        <motion.div
            className={"Description"}
            animate={control0}>
            <div className="aboutMe">
                <h1>About Me</h1>
                <p> Junior Node.js developer, with experience in Front-end technologies such as HTML,
                    CSS, React.js as well as MongoDB, REST API, and UI/UX.<br /> Graduated from Netcraft
                    Fullstack course. <br />Looking for entry-level roles in tech companies with
                    opportunities to learn and grow.
                </p>
            </div>
        </motion.div>
    </div>
    );
}

export default Description;