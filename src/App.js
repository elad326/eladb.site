import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SiteLayout from './pages/SiteLayout';
import Home from './pages/Home';
import About from './pages/AboutPage';
import Works from './pages/Works';
import CustomerReviewsPage from './pages/CustomerReviewsPage';
import WhatBuild from './pages/WhatBuild';
import Blog from './pages/Blog';
import AccessabilityStatment from './pages/AccessabilityStatment';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<SiteLayout/>}>          
            <Route index element={<Home/>} />
            <Route path="reviews" element={<CustomerReviewsPage/>} />
            <Route path="about" element={<About/>} />
            <Route path="works" element={<Works/>} />
            <Route path="whatBuild" element={<WhatBuild/>} />
            <Route path="blog" element={<Blog/>} />
            <Route path="accessability" element={<AccessabilityStatment/>} />
          </Route>            
        </Routes>
    </BrowserRouter>
  );
}



export default App;
