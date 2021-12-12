import React from 'react';
import { motion } from "framer-motion"
import './Description.scss';
import Logo from "../../design/Logo/Logo";
function Description(props) {
    return (
        <motion.div className='Description'
          initial={{y: '-100vh', visibility: 'hidden'}}
          animate={{y: 0 , visibility: 'visible'}}
          transition={{duration: 1.5, type: "spring" , delay: 3.5}}
        >
            <div className="about-me">
                <Logo/>
            </div>


        </motion.div>
    );
}

export default Description;