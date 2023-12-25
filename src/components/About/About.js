import React from 'react';
import './about.css';


const About = ({ title, text, imgUrl }) => {
  return (
    <section className='wrap-about'>
      <div>
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{__html: text}}/>
      </div>

      <div>
        <img src={imgUrl} alt="תמונה של אלעד" />
      </div>
    </section>
  )
}

export default About

