import React from "react";
import {Routes, Route} from "react-router-dom";
import Thanks from "./Thanks/Thanks";
import Home from "./Home/Home";
import './App.scss';
function App() {
  return (<div className="App">
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/thanks" element={<Thanks />}/>
          </Routes>
      </div>
  );
}

export default App;

