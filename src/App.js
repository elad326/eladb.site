import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SiteLayout from './pages/SiteLayout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import CustomerReviewsPage from './pages/CustomerReviewsPage';
import WhatBuild from './pages/WhatBuild';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';
import AccessabilityStatment from './pages/AccessabilityStatment';
import './App.css';
import Contact from './components/contact/Contact';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<SiteLayout/>}>          
            <Route index element={<Home/>} />
            <Route path="reviews" element={<CustomerReviewsPage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="works" element={<WorksPage/>} />
            <Route path="whatBuild" element={<WhatBuild/>} />
            <Route path="contact" element={<ContactPage/>} />
            <Route path="blog" element={<Blog/>} />
            <Route path="accessability" element={<AccessabilityStatment/>} />
          </Route>            
        </Routes>
    </BrowserRouter>
  );
}



export default App;
