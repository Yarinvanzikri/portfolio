import React from "react";
import {Routes, Route} from "react-router-dom";
import Thanks from "./Thanks/Thanks";
import Home from "./Home/Home";
import './App.scss';
import InstagramDescription from "./data/MyWork/InstagramDescription/InstagramDescription";
function App() {
  return (<div className="App">
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/instagram/info" element={<InstagramDescription/>} />
              <Route path="/thanks" element={<Thanks />} />

          </Routes>
      </div>
  );
}

export default App;

