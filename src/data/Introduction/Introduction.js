import React from 'react';
import { motion } from "framer-motion"
import './Introduction.scss';
import Logo from "../../design/Logo/Logo";
function Introduction(props) {
    return (
        <motion.div className='Introduction'
          initial={{y: '-100vh', visibility: 'hidden'}}
          animate={{y: 0 , visibility: 'visible'}}
          transition={{duration: 1.5, type: "spring" , delay: 3.5}}
        >
            <div className="Introduction__logo">
                <Logo/>
            </div>


        </motion.div>
    );
}

export default Introduction;