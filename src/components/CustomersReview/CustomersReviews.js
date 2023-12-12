import React from 'react';
import './customers-reviews.css';
import YouTubeVideo from './YouTubeVideo';

const CustomersReviews = () => {

  return (
    <section className='customers-reviews'>
        <h2>מה הלקוחות שלנו מספרים ?</h2>
        <div className='yuotube-wrap'>
          <YouTubeVideo videoUrl="https://www.youtube.com/embed/gmxdqaxZ5Ag?si=c2QfEHbzWecjP9ma"/>
          <YouTubeVideo videoUrl="https://www.youtube.com/embed/PnnYRSo3X1U?si=mm-uIMa-O_fHQzX5"/>
          <YouTubeVideo videoUrl="https://www.youtube.com/embed/0fey7lfamXE?si=O0Cuf2-z23BiLvIS"/>
       </div>  
    </section>
  )
}

export default CustomersReviews