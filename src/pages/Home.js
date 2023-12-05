import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EnterSite from '../components/EnterSite';
import CustomersReviews from './CustomersReviews';
import CompContainer from '../components/CompContainer/CompContainer';
import About from './About';



function Home() {
  return (
    <>
      <Header/>
        <EnterSite bgImgUrl="/assets/images/Banner.png" bgImgUrlMobile="/assets/images/Mobile/Banner-mobile.png"/>
        <CompContainer>
          <CustomersReviews/>
        </CompContainer>
        <CompContainer containerType ='bg-img'>
          <About/>
        </CompContainer>
        
      <Footer/>
    </>
  )
}

export default Home;