import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion"
import {useInView} from'react-intersection-observer'
import './MyWork.scss'
import SpaceShip from "../../design/SpaceShip/SpaceShip";
function MyWork(props) {

    const {ref, inView, entry} = useInView({
        threshold: 0.8,
        triggerOnce: true
    });
    console.log('what??!?!!!: ', useInView())
    console.log('MyWork entry: ', entry)
    const control2 = useAnimation();
    const controlShip2 = useAnimation();

    useEffect (() => {
        console. log ("use effect hook, myWork inView =", inView);
        //-------Mobile Animation ---------
        if(window.innerWidth <= 600) {
            if (inView){
                control2.start({
                    x: '-42.5vw',
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.3
                    }

                });
                controlShip2.start({
                    x: '100vw',
                    y: '35vh',
                    rotate: 0,
                    scale: 0.7,
                    transition: {
                         duration: 5,
                        delay: 1.5
                    }
                });
            }
            if (!inView){
                control2.start({x: '-150vw' })
                controlShip2.start({
                    x: '-100vw',
                    y: "35vh",
                    rotate: 20,
                    duration: 5,
                    scale: 0.3,
                });
            }

        } else {
            //-------Desktop Animation ---------
            if (inView){
                control2.start({
                    x: '-30.5vw',
                    transition: {
                        type: 'spring', duration: 3, bounce: 0.3
                    }
                });
                controlShip2.start({
                    x: '100vw',
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    transition: {
                        duration: 8, delay: 1.5
                    }
                })
            }
            if (!inView){
                control2.start({x: '150vw' })
                controlShip2.start({
                    x: '-100vw',
                    y: 0,
                    rotate: 20,
                    duration: 4,
                    scale: 0.3,
                });
            }
        }

    }, [inView]);


    return (
        <div className={'myWork-spacer'} ref={ref} >
            <motion.div className="MyWork"
                        animate={control2}>
                <div className='projects'>
                    <div>
                        <div>
                            <h1> Instagram</h1>
                        </div>
                        <div>
                            <p>A social network built with Vuejs, Vuex, Css, Quasar framework FireBase, Nodejs and Express.</p>
                        </div>
                        <div>
                            <button>
                                GITHUB
                            </button>
                            <button>
                                DEMO
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1> Instagram</h1>
                        </div>
                        <div>
                            <p>A social network built with Vuejs, Vuex, Css, Quasar framework FireBase, Nodejs and Express.</p>
                        </div>
                        <div>
                            <button>
                                GITHUB
                            </button>
                            <button>
                                DEMO
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1> Instagram</h1>
                        </div>
                        <div>
                            <p>A social network built with Vuejs, Vuex, Css, Quasar framework FireBase, Nodejs and Express.</p>
                        </div>
                        <div>
                            <button>
                                GITHUB
                            </button>
                            <button>
                                DEMO
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                animate={controlShip2}
            >
                <SpaceShip/>
            </motion.div>
        </div>

    );
}

export default MyWork;