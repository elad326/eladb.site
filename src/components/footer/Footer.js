import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {

  let d = new Date();

  return (
    <footer className='site-footer'>

      <Link to="/">
        <img src="/assets/images/footer-logo.png" alt="לוגו האתר"/>
      </Link>

      <Link to="/accessability">הצהרת נגישות</Link>

      <p className='copyrights'>כל הזכויות שמורות לאלעד אתרים חכמים - {d.getFullYear()}</p>

    </footer>
  )
}

export default Footer