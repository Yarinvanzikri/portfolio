
import { Routes, Route, Link } from "react-router-dom";

import Space from "./design/Starz/Space";
import Description from "./data/Description/Description";
import SpaceShip from "./design/SpaceShip/SpaceShip";
import './App.scss';
import Skills from "./data/Skills/Skills";
import MyWork from "./data/MyWork/MyWork";
import ContactMe from "./data/ContactMe/ContactMe";
import { motion } from "framer-motion";
function App() {
  return (
      <div className="App" >
          <div className="App__mainHeader">
              <Space/>
                <Description />
                <Skills />
                <MyWork />
                <ContactMe/>
                {/*<Routes>*/}
                {/*    <Route path="/" element={<Description />} />*/}
                {/*</Routes>*/}
              { (window.innerWidth >= 600) ?
                  <motion.div
                          initial={{ x: '-100vw' , y:'-150vh',scale: 0.1, rotate: 0}}
                          animate={{ x: '100vw', y:'-100vh' ,scale: 0.9,rotate: 50} }
                          transition={{duration: 6}}>
                          <SpaceShip/>
                  </motion.div>
                  :
                  <motion.div
                          initial={{ x: '-100vw' , y:'-170vh',scale: 0.1, rotate: 0}}
                          animate={{ x: '100vw', y:'-100vh' ,scale: 0.9,rotate: 50} }
                          transition={{duration: 4}}>
                          <SpaceShip/>
                  </motion.div> }
          </div>
      </div>
  );
}

export default App;
