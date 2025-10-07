import React from 'react'
import Home from './pages/home'
import Guidlines from './pages/guidelines'
import {Routes,Route } from 'react-router-dom'
import Phases from './pages/phases'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/guidelines" element={<Guidlines/>}/>
      <Route path="/phases" element={<Phases/>}/>
    </Routes>
    </>
  )
}

export default App