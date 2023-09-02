import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Apod from './pages/Apod';
import Mars from './pages/Mars';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apod' element={<Apod />} />
        <Route path='/mars' element={<Mars />} />
      </Routes>
    </>
  )
}

export default App
