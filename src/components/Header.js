import React from 'react'
import SiteMenu from './SiteMenu';
import './header.css';

function Header() {
  return (
    <header className='site-header'>
      <div className='header-links'>
        <a href="https://www.facebook.com/eladb.smart.sites" target="_blank">לדף הפייסבוק שלנו</a>
        <a href="#" target="_blank">ללמוד תכנות עם אלעד</a>
      </div>
      
      <SiteMenu/>
    </header>
  )
}

export default Header