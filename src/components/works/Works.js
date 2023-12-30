import React from 'react';
import ExampleWork from './ExampleWork';
import examlpes from './examples';
import './works.css';

const Works = () => {
  return (
    <section className='wrap-works'>
        <h1>עבודות לדוגמא</h1>

        <div className='examples'>
          {examlpes.map((item) => (
            <ExampleWork imgUrl={item.imgUrl} title={item.title} key={item.title}/> 
          ))}
        </div>
    </section>
  )
}

export default Works