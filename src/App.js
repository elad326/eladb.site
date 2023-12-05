import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import WhatBuild from './pages/WhatBuild';
import Works from './pages/Works';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/whatbuild" element={<WhatBuild/>} />
          <Route path="/works" element={<Works/>} />
          
        </Routes>
    </BrowserRouter>
  );
}



export default App;
