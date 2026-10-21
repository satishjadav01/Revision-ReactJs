import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div className='mx-auto max-w-5xl p-6'>
        <Outlet/>
      </div>
    </>
  ) 
}

export default Layout