import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/about'
import Contect from './page/Contect'

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/"}/>Home<NavLink/>
        <NavLink to={"/about"}/>About <NavLink/>
        <NavLink to={"/contect"}/>Contect<NavLink/>
      </nav>

    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contect' element = {<Contect/>}/>
    </Routes>

    </div>
  )
}

export default App