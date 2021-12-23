import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion"
import './ContactMe.scss'
import {useInView} from "react-intersection-observer";
import Earth from "../../design/Earth/Earth";
function ContactMe(props) {

    const observer3 = useInView({
        threshold: 0.9,
        triggerOnce: true
    });
    const control3 = useAnimation();
    const controlEarth = useAnimation();

    useEffect (() => {
        //-------Mobile Animation ---------
        if(window.innerWidth <= 600) {
            if (observer3.inView){
                control3.start({
                    x: 0,
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.2
                    }
                });
                controlEarth.start({
                    opacity: 1,
                    y: "60vh",
                    transition: {
                        duration: 3,
                        delay: 1
                    }
                });
            }
            if (!observer3.inView){
                control3.start({x: '-100vw' })
                controlEarth.start({
                    y: '100vh',
                    opacity: 0,
                    duration: 1,
                })
            }

        } else {
            //-------Desktop Animation ---------
            if (observer3.inView) {
                control3.start({
                    x: 0,
                    transition: {
                        type: 'spring', duration: 5, bounce: 0.2
                    }
                });
                controlEarth.start({
                            opacity: 1,
                            y: "5vh",
                    transition: {
                        duration: 2,
                        delay: 1
                    }
                });
            }
            if (!observer3.inView) {
                control3.start({x: '-100vw'});
                controlEarth.start({
                        y: '100vh',
                        opacity: 0,
                        duration: 1,
                })
            }
        }
    }, [observer3.inView, observer3.ref, control3, controlEarth]);


    return (
        <div  ref={observer3.ref} className='ContactMe_main'>
            <motion.div
                className='ContactMe'
                        animate={control3}>
                <h1>Contact Me</h1>
                <form action="https://formsubmit.co/a90ef266464788c55aac49728a5e4cd5"
                      method="POST"
                >
                    <div className='ContactMe__inputs'>
                        <div>
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_next" value="https://YarinBenZikri.me/thanks"/>
                            <input type='text'
                                   name='name'
                                   placeholder='Full name*'
                                   autoComplete="off"
                            />
                        </div>
                        <div>
                            <input type='email' name="email" required
                                   placeholder='Email*'
                                   autoComplete="off"
                            />
                        </div>
                        <div>
                            <textarea name="content"
                                      placeholder='Write Here'
                                      autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className='ContactMe__btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </motion.div>
            {/*<div className={'earthContainer'}>*/}
                <motion.div
                            animate={controlEarth}>
                    <Earth/>
                </motion.div>
            {/*</div>*/}

        </div>

    );
}

export default ContactMe;