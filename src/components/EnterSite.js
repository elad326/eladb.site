import React from 'react';


import './enterSite.css';


function EnterSite({ bgImgUrl, bgImgUrlMobile }) {

  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // useEffect(() => {

  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   // Add event listener for window resize
  //   window.addEventListener('resize', handleResize);

  //   // Remove event listener when component is unmounted
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };

  // }, []);

  const enterStyle = {

      //insert css vars to call the right bg image depend on screen 
      '--bg-img-desktop': `url(${bgImgUrl})`,
      '--bg-img-mobile': `url(${bgImgUrlMobile})`,
  };

  return (
    <section className='site-enter' style={enterStyle}>

      <div className='enter-site-text'>

          <h1>למה לבנות אתר אצלינו ?</h1>
          <p>
              ניווט קל וברור // התאמה לכל המסכים //
              אתר יתן - מידע ראשוני ללקוחות שזמין 24/7 //
              אפשרות להגעה לקהלי יעד חדשים.
          </p>
          <h2>בונים אתרים כבר 7 שנים, צרו קשר עוד היום!</h2>

      </div>

    </section>
  )
}

export default EnterSite;