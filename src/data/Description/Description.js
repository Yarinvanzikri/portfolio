import React from 'react';
import { motion } from "framer-motion"
import './Description.scss';
function Description(props) {
    return (
        <motion.div className='Description'
          initial={{y: '-100vh', visibility: 'hidden'}}
          animate={{y: 0 , visibility: 'visible'}}
          transition={{duration: 1.5, type: "spring" , delay: 3.5}}
        >
            <div className="about-me">
                <h1>Hi My name Is Yarin</h1>
                {/*<p> Junior Node.js developer,<br /> with experience in Front-end technologies such as HTML,*/}
                {/*    CSS, React.js as well as MongoDB, REST API, and UI/UX.<br /> Graduated from Netcraft*/}
                {/*    Fullstack course. Looking for entry-level roles in tech companies with*/}
                {/*    opportunities to learn and grow.</p>*/}
            </div>

        </motion.div>
    );
}

export default Description;