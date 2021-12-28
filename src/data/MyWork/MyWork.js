import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion"
import {useInView} from'react-intersection-observer'
import './MyWork.scss'
import SpaceShip from "../../design/SpaceShip/SpaceShip";
import {Link} from "react-router-dom";
function MyWork(props) {

    const observer2 = useInView({
        threshold: 0.9,
        triggerOnce: true
    });
    const control2 = useAnimation();
    const controlShip2 = useAnimation();

    useEffect (() => {
        //-------Mobile Animation ---------
        if(window.innerWidth <= 600) {
            if (observer2.inView){
                control2.start({
                    x: 0,
                    transition: {
                        type: 'spring', duration: 1.5, bounce: 0.2
                    }

                });
                controlShip2.start({
                    x: '110vw',
                    y: '-68vh',
                    rotate: 0,
                    scale: 0.5,
                    transition: {
                         duration: 4,
                        delay: 0.5
                    }
                });
            }
            if (!observer2.inView){
                control2.start({x: '100vw' })
                controlShip2.start({
                    x: '-100vw',
                    y: "-70vh",
                    rotate: 20,
                    duration: 5,
                    scale: 0.3,
                });
            }

        } else {
            //-------Desktop Animation ---------
            if (observer2.inView){
                control2.start({
                    x: 0,
                    transition: {
                        type: 'spring', duration: 3, bounce: 0.2
                    }
                });
                controlShip2.start({
                    x: '110vw',
                    y: '25vh',
                    rotate: 0,
                    scale: 0.8,
                    transition: {
                        duration: 6, delay: 1
                    }
                })
            }
            if (!observer2.inView){
                control2.start({x: '100vw' })
                controlShip2.start({
                    x: '-110vw',
                    y: '13vh',
                    rotate: 20,
                    duration: 4,
                    scale: 0.3,
                });
            }
        }

    }, [observer2.inView, observer2.ref, control2, controlShip2]);


    return (
        <div  ref={observer2.ref} className="MyWork_main">
            <motion.div
                className="MyWork"
                        animate={control2}>
                <div className='projects'>
                    <div>
                        <div className={'projectHeader'}>
                            <h1>My Projects</h1>
                        </div>
                        <div>
                            <h2> Instagram </h2>
                        </div>
                        <div>
                            <p>A social network built with React.js, Sass, mongoDB,Nodejs and Express.</p>
                        </div>
                        <div className="MyWork__btn">
                            <a href='https://github.com/Yarinvanzikri/instagram-ui' target={"_blank"} rel={'noreferrer'}>
                                <button>
                                    GITHUB - UI
                                </button>
                            </a>
                            <a href="https://github.com/Yarinvanzikri/instagram-api" target={"_blank"} rel={'noreferrer'}>
                                <button>
                                    GITHUB - API
                                </button>
                            </a>

                        </div>
                    </div>
                    <div>
                        <div>
                            <h2> Instagram - Demo(Heroku)</h2>
                        </div>
                        <div>
                            <p>A social network built with React.js, Sass, mongoDB,Nodejs and Express.</p>
                        </div>
                        <div className="MyWork__btn">
                                <Link to='/instagram/info' target={"_blank"} rel={'noreferrer'}>
                                    <button>
                                        Description
                                    </button>
                                </Link>
                            <a href="https://radiant-retreat-03616.herokuapp.com/" target={"_blank"} rel={"noreferrer"}>
                                <button>
                                    DEMO
                                </button>
                            </a>

                        </div>
                    </div>
                    <div>
                        <div>
                            <h2> Portfolio</h2>
                        </div>
                        <div>
                            <p>This Portfolio made using React>js Sass, Framer Motion & React Observer.</p>
                        </div>
                        <div className="MyWork__btn">
                            <a href="https://github.com/Yarinvanzikri/portfolio" target={"_blank"} rel={'noreferrer'}>
                                <button>
                                    GITHUB
                                </button>
                            </a>
                            <button>
                                Thats it
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className={'earthContainer'}>
                <motion.div
                    animate={controlShip2}
                >
                    <SpaceShip/>
                </motion.div>
            </div>

        </div>

    );
}

export default MyWork;