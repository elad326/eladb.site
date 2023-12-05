import React from 'react';
import './customers-reviews.css';
import YouTubeVideo from '../components/CustomersReview/YouTubeVideo';

const CustomersReviews = () => {
  return (
    <section className='customers-reviews'>
        <h2>מה הלקוחות שלנו מספרים ?</h2>
        <YouTubeVideo videoUrl="https://www.youtube.com/embed/gmxdqaxZ5Ag?si=c2QfEHbzWecjP9ma"/>
        <YouTubeVideo videoUrl="https://www.youtube.com/embed/PnnYRSo3X1U?si=mm-uIMa-O_fHQzX5"/>
        <YouTubeVideo videoUrl="https://www.youtube.com/embed/0fey7lfamXE?si=O0Cuf2-z23BiLvIS"/>
    </section>
  )
}

export default CustomersReviews