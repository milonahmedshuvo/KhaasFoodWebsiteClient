
import React from 'react'
import Home from '../Components/Home/Home'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'
import Header2 from '../Components/Shared/Header2'

const Layout = () => {

  
  return (
    <div>
      <Header2></Header2>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout
