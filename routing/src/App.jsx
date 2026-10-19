import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import about from './page/about'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>

      <Navbar/>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App