import { React, useState, useEffect } from 'react';

import { ImSpinner2 } from 'react-icons/im';

import {
  BsMoonStars,
  BsClouds,
  BsSun,
  BsSnow,
  BsCloudLightningRain,
  BsCloudDrizzle,
  BsCloudRainHeavy,
} from 'react-icons/bs';

import './Weather.css';

function Weather() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const lat = 40.585258;
  const lon = -105.084419;
  const loc = 'Fort Collins, CO';
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, [apiUrl]);

  const getIcon = (cond) => {
    const time = parseInt(
      new Date().toLocaleString('en-US', {
        timeZone: 'America/Denver',
        hour12: false,
        hour: '2-digit',
      })
    );
    const size = '1em';

    switch (cond) {
      // https://openweathermap.org/weather-conditions
      case 'snow':
        return <BsSnow size={size} />;
      case 'thunderstorm':
        return <BsCloudLightningRain size={size} />;
      case 'drizzle':
        return <BsCloudDrizzle size={size} />;
      case 'rain':
        return <BsCloudRainHeavy size={size} />;
      case 'clouds':
        return <BsClouds size={size} />;
      case 'clear':
        if (time >= 20 || time <= 6) {
          return <BsMoonStars size={size} />;
        }
        return <BsSun size={size} />;
      default:
        return <BsSun size={size} />;
    }
  };

  return (
    <div>
      {loading ? (
        <div className='banner-weather'>
          <ImSpinner2 className='banner-weather-loading' />
        </div>
      ) : (
        <div className='banner-weather'>
          {getIcon(data.weather[0].main.toLowerCase())}
          <span className='banner-weather-desc'>
            {Number(1.8 * (data.main.temp - 273.15) + 32).toFixed(0)}
            &#8457;, {loc}
          </span>
        </div>
      )}
    </div>
  );
}

export default Weather;
