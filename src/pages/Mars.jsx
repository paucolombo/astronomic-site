import React, { useState, useEffect } from 'react'
import "./Mars.css"
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers'
import MarsHeader from '../components/MarsHeader';
import { Link } from 'react-router-dom'

function Mars() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [mars, setMars] = useState([]);
  // Almacenamos en una constante la URL de la NASA y la API KEY
  const MARS_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=";
  const NASA_API_KEY = "NKhFFADMSs7bQVdD2STnM2tKGclb6yAgFDkDHcpm";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(`${MARS_URL}${date}&api_key=${NASA_API_KEY}`).then((res) => res.json());
        console.log(data.photos);
        setMars(data.photos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [date]);
  //asing a diferent background to Apod
  document.body.style.backgroundColor = "#331618";
  const urlImagen = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%236E1616' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23942B2B'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E";
  document.body.style.backgroundImage = `url("${urlImagen}")`;

  const maxDate = dayjs();
  function handleDate(newDate) {
    setDate(dayjs(newDate).format('YYYY-MM-DD'));
  }
  return (
    <>
      <MarsHeader />
      <div className='marsContainer'>
        {mars.length === 0 && <h2>There are no pictures for today yet. Please try again later</h2>}
        {mars.length != 0 && <div className='marsImg'>
          <img src={mars[0].img_src} alt={mars[0].rover.name} />
        </div>
        }
        <div className='infoAndDateContainer'>
          <div className='datePicker'>
            <h2>Select a date: </h2>
            <DatePicker className='datePicker'
              value={setDate}
              maxDate={maxDate}
              onChange={handleDate}
            />
          </div>
          {mars.length != 0 && <div className='infoContainer'>
            <span>Date: {mars[0].earth_date}</span>
            <h2>Rover {mars[0].rover.name}</h2>
            <h4>Camera: {mars[0].camera.name} </h4>
            <p>Over the years, NASA has sent five robotic vehicles, called rovers, to Mars.
              Mars is a fascinating planet. It’s icy cold and covered in reddish dust and dirt. Like Earth, it has volcanoes, gullies, and flat plains. Scientists can also see channels that look like they were carved by rivers and streams a long, long time ago. Over the years, we’ve sent four robotic vehicles, or rovers, to learn more about Mars. And NASA’s fifth Mars rover, Perseverance, landed on the Red Planet in February 2021!
            </p>
          </div>
          }
          <Link to='.././apod'> <button className='toggleApod'><img src='./apod-ico.png' alt='apod' />Switch to APOD</button></Link>
        </div>
      </div>
    </>)
}

export default Mars