import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EnterSite from './EnterSite';
import CustomersReviews from './CustomersReview/CustomersReviews';
import CompContainer from './CompContainer/CompContainer';
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