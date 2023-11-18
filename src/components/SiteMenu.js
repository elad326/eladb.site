import React, { useState } from 'react'
import Menuitem from './Menuitem';

function SiteMenu() {

  const [showMenu, setshowMenu] = useState(true);

  const toggleMenu = () => {

    if(showMenu){
      setshowMenu(false);
    }else{
      setshowMenu(true);
    }
  };


let menu_ar = ["דף הבית", "מה אנחנו בונים?", "דוגמאות", "המלצות לקוחות", "תהליך בניית אתר", "יצירת קשר", "הבלוג שלנו", "חזרה לראש הדף"];

  return (

      <div className='site_logo_menu'>   

        <div className='mobile-menu' onClick={toggleMenu}>
          <span></span>  
          <span></span>  
          <span></span>  
        </div>     
        
        <nav className={'site-menu ' + (showMenu? '' : 'show_menu')}>
            <ul>
                {menu_ar.map((item)=>( 
                    <Menuitem item={item} key={item}/>
                ))}
            </ul>
        </nav>
        
        <a href="http://localhost:3000/">
          <img src='/assets/images/logo.png' alt="לוגו האתר"  className='site-logo'/>
        </a>

      </div>

        
  )
}

export default SiteMenu