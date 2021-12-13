import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion"
import {useInView} from'react-intersection-observer'
import './MyWork.scss'
import SpaceShip from "../../design/SpaceShip/SpaceShip";
import {Link} from "react-router-dom";
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
                        <div className={'projectHeader'}>
                            <h1>My Projects</h1>
                        </div>
                        <div>
                            <h1> Instagram </h1>
                        </div>
                        <div>
                            <p>A social network built with React.js, Sass, mongoDB,Nodejs and Express.</p>
                        </div>
                        <div className="MyWork__btn">
                            <a href='https://github.com/Yarinvanzikri/instagram-ui'>
                                <button>
                                    GITHUB - UI
                                </button>
                            </a>
                            <a href="https://github.com/Yarinvanzikri/instagram-api">
                                <button>
                                    GITHUB - API
                                </button>
                            </a>

                        </div>
                    </div>
                    <div>
                        <div>
                            <h1> Instagram - Demo(Heroku)</h1>
                        </div>
                        <div>
                            <p>A social network built with React.js, Sass, mongoDB,Nodejs and Express.</p>
                        </div>
                        <div className="MyWork__btn">
                            <a href="https://radiant-retreat-03616.herokuapp.com/">
                                <Link to='/instagram/info'>
                                    <button>
                                        Description
                                    </button>
                                </Link>
                            </a>
                            <a href="https://radiant-retreat-03616.herokuapp.com/">
                                <button>
                                    DEMO
                                </button>
                            </a>

                        </div>
                    </div>
                    <div>
                        <div>
                            <h1> Portfolio</h1>
                        </div>
                        <div>
                            <p>This Portfolio made using React>js Sass, Framer Motion & React Observer.</p>
                        </div>
                        <div className="MyWork__btn">
                            <a href="https://github.com/Yarinvanzikri/portfolio">
                                <button>
                                    GITHUB - PORTFOLIO
                                </button>
                            </a>
                            <button>
                                THIS IS THE DEMO :)
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