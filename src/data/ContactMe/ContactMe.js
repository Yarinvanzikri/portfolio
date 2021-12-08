import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion"
import './ContactMe.scss'
import {useInView} from "react-intersection-observer";
import SpaceShip from "../../design/SpaceShip/SpaceShip";
function ContactMe(props) {

    const {ref, inView, entry} = useInView({
        threshold: 0.9,
        triggerOnce: true
    });
    console.log('ContactMe entry: ', entry)
    const control3 = useAnimation();
    const controlShip3 = useAnimation();

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
                    y: '70vh',
                    rotate: 270,
                    scale: 1.5,
                    transition: {
                         duration: 4, delay : 6
                    }
                });
            }
            if (!inView) {
                control3.start({x: '-150vw'})
                controlShip3.start({
                    x: '100vw',
                    y: "50vh",
                    rotate: 200,
                    duration: 4,
                    scale: 0.3,
                });
            }
        }
    }, [inView]);


    return (
        <div className={'contact-spacer'} ref={ref}>
            <motion.div className='ContactMe'
                        animate={control3}>
                <h1>Contact Me</h1>
                <form>
                    <div className='ContactMe__inputs'>
                        <div>
                            <input type='text'
                                   placeholder='Full name*'
                            />
                        </div>
                        <div>
                            <input type='email'
                                   placeholder='Email*'
                            />
                        </div>
                        <div>
                            <input type='textarea'
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
                animate={controlShip3}
            >
                <SpaceShip/>
            </motion.div>
        </div>

    );
}

export default ContactMe;