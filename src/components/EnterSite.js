import React from 'react'


import './enterSite.css';


function EnterSite({ bgImgUrl }) {

  const enterStyle = {
      backgroundImage: `url(${bgImgUrl})`,
  };

  return (
    <section className='site-enter' style={enterStyle}>

        <h1>למה לבנות אתר אצלינו ?</h1>
        <p>
             ניווט קל וברור // התאמה לכל המסכים //
            אתר יתן - מידע ראשוני ללקוחות שזמין 24/7 //
            אפשרות להגעה לקהלי יעד חדשים.
        </p>
        <h2>בונים אתרים כבר 7 שנים, צרו קשר עוד היום!</h2>

    </section>
  )
}

export default EnterSite;