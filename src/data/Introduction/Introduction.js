import React from 'react';
import { motion } from "framer-motion"
import './Introduction.scss';
import Logo from "../../design/Logo/Logo";
import Planet from "../../design/Planet/Planet";
function Introduction(props) {
    return (
        <div className='Introduction_main'>
            {(window.innerWidth <= 600)
            ?
                // Mobile
                <motion.div className='Introduction'
                          initial={{y: '-100vh', visibility: 'hidden'}}
                          animate={{y: '-10vh' , visibility: 'visible'}}
                          transition={{duration: 1.5, type: "spring" , delay: 1.7}}>
                    <div className="Introduction__logo">
                        <Logo/>
                    </div>
                </motion.div>
            :
                //Desktop
                <motion.div className='Introduction'
                        initial={{y: '-100vh', visibility: 'hidden'}}
                        animate={{y: '0' , visibility: 'visible'}}
                        transition={{duration: 1.5, type: "spring" , delay: 1.7}}>
                    <div className="Introduction__logo">
                        <Logo/>
                    </div>
                </motion.div>
            }
            <div className={'centeredPlanet'}>
                {(window.innerWidth >= 600)
                    ?
                    // Desktop
                    <motion.div
                        initial={{y: '300vh' }}
                        animate={{y: '-60vh'}}
                        transition={{ type: "spring", duration: 4, bounce: 0.2, delay: 1}}>
                        <Planet/>
                    </motion.div>
                    :
                    // Mobile
                    <motion.div
                        initial={{y: '300vh', scale: 0.3}}
                        animate={{y: '-40vh',scale: 0.6}}
                        transition={{ type: "spring", duration: 4, bounce: 0.2, delay: 1}}>
                        <Planet/>
                    </motion.div>
                }
            </div>

        </div>

    );
}

export default Introduction;