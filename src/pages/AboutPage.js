import React from 'react';
import CompContainer from '../components/CompContainer/CompContainer';
import About from '../components/About/About';
import {aboutText, imgUrl}  from '../components/About/aboutText';

function AboutPage() {

  return (
    <CompContainer containerType ='bg-img'>
        <About title="אודות" text={aboutText} imgUrl={imgUrl}/>
    </CompContainer>
  )
}

export default AboutPage;