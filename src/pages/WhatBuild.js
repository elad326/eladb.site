import React from 'react';
import CompContainer from '../components/CompContainer/CompContainer';
import Specialization from '../components/specilizations/Specialization';
import specializationText from '../components/specilizations/specializationText';

const WhatBuild = () => {
  return (
      <CompContainer containerType ='bg-img'>
        <h1 className='page-header'>מה אנחנו בונים ?</h1>
        <section className='wrap-speacilizations'>
          {specializationText.map(({imgUrl, title, text}) => (
            <Specialization imgUrl={imgUrl} title={title} text={text} />
          ))}
        </section>
      </CompContainer>
  )
}

export default WhatBuild