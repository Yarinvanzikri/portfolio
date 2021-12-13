import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion"
import './ContactMe.scss'
import {useInView} from "react-intersection-observer";
import SpaceShip from "../../design/SpaceShip/SpaceShip";
import Clouds from "../../design/Clouds/Clouds";
function ContactMe(props) {

    const {ref, inView, entry} = useInView({
        threshold: 0.9,
        triggerOnce: true
    });
    console.log('ContactMe entry: ', entry)
    const control3 = useAnimation();
    const controlShip3 = useAnimation();
    const controlClouds = useAnimation();

    useEffect (() => {
        console. log ("use effect hook,  contactMe inView =", inView);
        //-------Mobile Animation ---------
        if(window.innerWidth <= 600) {
            if (inView){
                control3.start({
                    x: '-42.5vw',
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.3
                    }
                });
                controlShip3.start({
                    x: 0,
                    y: '110vh',
                    rotate: 270,
                    scale: 0.9,
                    transition: {
                         duration: 5, delay : 5
                    }
                });
                controlClouds.start({
                    opacity: 1,
                    transition: {
                        duration: 5,
                        delay: 7,
                    }

                });
            }
            if (!inView){
                control3.start({x: '-150vw' })
                controlShip3.start({
                    x: '100vw',
                    y: "110vh",
                    rotate: 200,
                    duration: 4,
                    scale: 0.3,
                });
                controlClouds.start({
                    opacity: 0,
                    duration: 10,
                })
            }

        } else {
            //-------Desktop Animation ---------
            if (inView) {
                control3.start({
                    x: '-35.5vw',
                    transition: {
                        type: 'spring', duration: 5, bounce: 0.3
                    }
                });
                controlShip3.start({
                    x: 0,
                    y: ['60vh','60vh','60vh','60vh','60vh','60vh', '75vh', '80vh', '85vh','90vh','95vh','100vh','105vh','110vh','115vh', '120vh'],
                    rotate: 270,
                    scale: 1.5,
                    transition: {
                         duration: 8, delay : 6
                    }
                });
                controlClouds.start({
                            opacity: 1,
                    transition: {
                        duration: 10,
                        delay: 8
                    }
                });
            }
            if (!inView) {
                control3.start({x: '-150vw'});
                controlShip3.start({
                    x: '100vw',
                    y: "50vh",
                    rotate: 200,
                    duration: 5,
                    scale: 0.3,
                });
                controlClouds.start({
                        opacity: 0,
                        duration: 10,
                })
            }
        }
    }, [inView]);


    return (
        <div className={'contact-spacer'} ref={ref}>
            <motion.div className='ContactMe'
                        animate={control3}>
                <h1>Contact Me</h1>
                <form action="https://formsubmit.co/a90ef266464788c55aac49728a5e4cd5"
                      method="POST"
                >
                    <div className='ContactMe__inputs'>
                        <div>
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_next" value="https://vanzik.me/thanks"/>
                            <input type='text'
                                   name='name'
                                   placeholder='Full name*'
                            />
                        </div>
                        <div>
                            <input type='email' name="email" required
                                   placeholder='Email*'
                            />
                        </div>
                        <div>
                            <input type='text'
                                   name='content'
                                   placeholder='Write Here'
                            />
                        </div>

                    </div>
                    <div className='ContactMe__btn'>
                        <button type='submit'>Submit</button>
                    </div>

                </form>
            </motion.div>
            <motion.div
                animate={controlShip3}>
                <SpaceShip />
            </motion.div>

            <motion.div
                animate={controlClouds}>
                <Clouds />
            </motion.div>
        </div>

    );
}

export default ContactMe;