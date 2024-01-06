import React, { useState } from 'react';
import Menuitem from './Menuitem';
import { Link } from 'react-router-dom';


const menu_ar = [
  {
    label: 'דף הבית',
    href: '/',
  },
  {
    label: 'המלצות לקוחות',
    href: '/reviews',
  },
  {
    label: 'אודות',
    href: '/about',
  },
  {
    label: 'דוגמאות',
    href: '/works',
  },
  {
    label: 'מה אנחנו בונים',
    href: '/whatBuild',
  },
  {
    label: 'צור קשר',
    href: '/contact',
  },
  {
    label: 'הבלוג שלנו',
    href: '/blog',
  },
];

function SiteMenu() {
  const [showMenu, setshowMenu] = useState(true);

  const toggleMenu = () => {
    if (showMenu) {
      setshowMenu(false);
    } else {
      setshowMenu(true);
    }
  };

  

  return (
    <div className="site_logo_menu">
      <div className="mobile-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={'site-menu ' + (showMenu ? '' : 'show_menu')}>
        <ul>
          {menu_ar.map((item) => (
            <Menuitem item={item} key={item.href} />
          ))}
        </ul>
      </nav>

      <Link to="/">
        <img src="/assets/images/logo.png" alt="לוגו האתר" className="site-logo" />
      </Link>
    </div>
  );
}

export default SiteMenu;
