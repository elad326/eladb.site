import React from 'react';
import './specializations.css';
import { Link } from 'react-router-dom';

const Specialization = ({ imgUrl, title, text}) => {
  return (

          <article className='what-build'>

            <img src={imgUrl} alt="אייקון של מה אנחנו עושים" aria-hidden="true"/>
            <h2>{title}</h2>
            <p>
              {text}
            </p>
            <Link to="/contact">לתיאום שיחה ללא עלות</Link>

          </article>
  )
}

export default Specialization