import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutPage';
import Works from './pages/Works';
import CustomerReviewsPage from './pages/CustomerReviewsPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<SiteLayout/>}>          
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="works" element={<Works/>} />
          </Route>            
        </Routes>
    </BrowserRouter>
  );
}



export default App;
