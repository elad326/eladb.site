import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const SiteLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>    
    </>
  )
}

export default SiteLayout