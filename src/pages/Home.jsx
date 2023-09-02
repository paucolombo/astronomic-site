import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='homeContainer'>
      <h1>Take a look at the Space</h1>
      <p>In this website you can see pictures of the Universe using the NASA technology: APOD.</p>
      <p> You can also watch a pictures of Mars provided by the Mars Rovers Robots.</p>
      <span>What do you want to see today? </span>
      <div className='buttonsContainer'>
        <Link to='./apod'> <button className='buttonApod'><img src='./apod-ico.png' alt='apod' />APOD</button></Link>
        <Link to='./mars'> <button className='buttonMars'><img src='./mars-ico.png' alt='apod' />MARS</button></Link>
      </div>
    </div>
  )
}

export default Home