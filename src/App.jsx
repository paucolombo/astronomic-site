import { lazy, Suspense } from 'react';
import './App.css'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

const Apod = lazy(() => import('./pages/Apod'));
const Mars = lazy(() => import('./pages/Mars'));

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apod' element=
          {
            <Suspense fallback={<div className='loading'>Loading...</div>}>
              <Apod />
            </Suspense>
          }
        />
        <Route path='/mars' element={
          <Suspense fallback={<div className='loading'>Loading...</div>}>
            <Mars />
          </Suspense>} />
      </Routes>
    </>
  )
}

export default App
