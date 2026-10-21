import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex gap-6 bg-blue-600 p-5 text-white'>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Product</Link>
        <Link to="/">Contect</Link>
    </nav>
  )
}

export default Navbar