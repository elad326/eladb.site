import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EnterSite from './EnterSite';


function Home() {
  return (
    <>
      <Header/>
        <EnterSite bgImgUrl="/assets/images/Banner.png" bgImgUrlMobile="/assets/images/Mobile/Banner-mobile.png"/>

      <Footer/>
    </>
  )
}

export default Home;