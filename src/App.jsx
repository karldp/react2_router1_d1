import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'
import Navbars from './components/Navbars'

const App = () => {
  return (
    <>
    <Navbars/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App