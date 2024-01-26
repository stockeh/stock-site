import { React, useEffect, useState, useRef } from 'react';
import { BsCloudDrizzle, BsCloudLightningRain, BsCloudRainHeavy, BsClouds, BsMoonStars, BsSnow, BsSun } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import { TbDroplet } from "react-icons/tb";
import { FaLocationArrow } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import { Card, CardContent, Box, Typography, Stack, Grid } from '@mui/material';
import moment from 'moment';

import './Weather.css';

const useMousePosition = (el) => {
  const [
    mousePosition,
    setMousePosition
  ] = useState(0);
  useEffect(() => {
    const updateMousePosition = ev => {
      if (el.current) {
        setMousePosition(ev.clientX - el.current.getBoundingClientRect().left);
      }
    };
    const updateTouchPosition = ev => {
      if (el.current) {
        setMousePosition(ev.targetTouches[0].clientX - el.current.getBoundingClientRect().left);
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchstart', updateTouchPosition);
    window.addEventListener('touchmove', updateTouchPosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchstart', updateMousePosition);
      window.removeEventListener('touchmove', updateMousePosition);
    };
  }, [el]);
  return mousePosition;
};

function Weather() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(true);
  const [advancedVisible, setAdvancedVisible] = useState(false);
  const [focusedTime, setFocusedTime] = useState(0);
  const [contentMargin, setContentMargin] = useState(0);
  const contentRef = useRef(null);
  const mousePosition = useMousePosition(contentRef);

  const lat = 40.585258;
  const lon = -105.084419;
  const loc = 'Fort Collins, CO';
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  const currentApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

  useEffect(() => {

    const fetchForecastWeather = async () => {
      const weather = await fetch(apiUrl);
      if (weather.status !== 200) return [];
      const weatherData = await weather.json();
      return weatherData;
    }

    const fetchCurrentWeather = async () => {
      const weather = await fetch(currentApiUrl);
      if (weather.status !== 200) return [];
      const weatherData = await weather.json();
      return weatherData;
    }

    Promise.all([fetchForecastWeather(), fetchCurrentWeather()]).then((data) => {
      const forecastData = data[0];
      const currentData = data[1];
      if (forecastData.length === 0 || currentData.length === 0) {
        setStatus(false);
        return;
      }
      setData([currentData, ...forecastData.list]);
      return forecastData;
    });
  }, [apiUrl, currentApiUrl]);

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

  const getFahrenheit = (temp) => {
    return temp.toFixed(0);
  }

  return status ? (
    <div>
      {!data || data.length === 0 ? (
        <div className='banner-weather'>
          <ImSpinner2 className='banner-weather-loading' />
        </div>
      ) : (
        <div className='weather-wrapper'
        onMouseLeave={() => setAdvancedVisible(false)}
        >
          <div className='banner-weather'
            onMouseEnter={() => setAdvancedVisible(true)}
            onClick={() => setAdvancedVisible(!advancedVisible)}
          >
            {getIcon(data[0].weather[0].main.toLowerCase())}
            <span className='banner-weather-desc'>
              {getFahrenheit(data[0].main.temp)}
              &#8457;, {loc}
            </span>
          </div>
          <AnimatePresence>
              {advancedVisible && (
                <motion.div className='advanced-forecast' 
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <Card
                      sx={{
                        background: '#fff',
                        // Apply responsive minWidth using @media queries
                        '@media (min-width: 375px)': {
                          minWidth: 375,
                        },
                        '@media (min-width: 390px)': {
                          minWidth: 390,
                        },
                        '@media (min-width: 430px)': {
                          minWidth: 430,
                        },
                      }}
                    >
                    <CardContent ref={contentRef}>
                      <Box sx={{
                        width: 'fit-content',
                        transform: `translateX(${contentMargin}px)`,
                      }}>
                        <Typography variant="h6" component="div" sx={{
                          color: 'var(--black)'
                        }}>
                        {getIcon(data[focusedTime].weather[0].main.toLowerCase())} {getFahrenheit(data[focusedTime].main.temp)}&#8457;
                        </Typography>
                        {focusedTime === 0 ? (
                          <Stack sx={{ mb: 1.5 }} direction={'row'} alignItems={'center'}>
                          <Typography color="text.secondary" sx={{ mr: 1 }}>
                            H: {getFahrenheit(data[focusedTime].main.temp_max)}&deg; L: {getFahrenheit(data[focusedTime].main.temp_min)}&deg;
                          </Typography>
                          <TbDroplet color="text.secondary" style={{
                            color: 'rgba(0, 0, 0, 0.6)'
                          }} />
                          <Typography color="text.secondary" sx={{ ml: 0.5, mr: 1 }}>
                            {data[focusedTime].main.humidity}%
                          </Typography>
                          <Typography color="text.secondary">
                            {data[focusedTime].wind.speed.toFixed(0)} mph
                            <FaLocationArrow style={{
                              transform: `rotate(${data[focusedTime].wind.deg}deg)`,
                              fontWeight: 'bold',
                              marginLeft: '0.5em',
                            }} size={10} />
                          </Typography>
                        </Stack>
                        ) : (
                          <Stack sx={{ mb: 1.5 }} direction={'row'} justifyContent={'center'}>
                            <Typography color="text.secondary" >
                              {moment(new Date(data[focusedTime].dt * 1000)).format('h A')}
                            </Typography>
                          </Stack>
                        )}
                      </Box>
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart
                          onMouseMove={(state) => {
                            if (state.isTooltipActive) {
                              setFocusedTime(state.activeTooltipIndex);
                              if (contentRef.current && mousePosition > 50) {
                                setContentMargin(mousePosition - 50);
                              }
                            } else {
                              setFocusedTime(0);
                              setContentMargin(0);
                            }
                         }}
                          data={
                            data.slice(0, 18).map((item) => {
                              return {
                                time: new Date(item.dt * 1000),
                                temp: item.main.temp,
                              }
                            })}
                          margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis
                            dataKey="time"
                            tickFormatter={(tick) => moment(tick).format('h A')}
                            interval={2}
                            ticks={data.slice(1, 17).map((item) => new Date(item.dt * 1000))}
                          />
                          <YAxis
                            domain={['auto', 'auto']}
                            orientation='right'
                            width={5}
                          />
                          <Tooltip content={<></>}/>
                          <Line type="monotone" dataKey="temp" stroke="var(--orange)" strokeWidth={2.5} dot={false}/>
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                    <Grid container>
                      <Typography variant="body2" color="text.secondary" sx={{
                          paddingBottom: '5px',
                          paddingLeft: '10px'
                        }}>
                         {moment(new Date(data[focusedTime].dt * 1000)).format('MMM d, YYYY')}
                      </Typography>                          
                      <Grid item xs>                                 
                        <Grid container direction="row-reverse">      
                        <Typography variant="body2" color="text.secondary" sx={{
                          paddingBottom: '5px',
                          paddingRight: '10px'
                        }}>
                          {lat.toFixed(3)}, {lon.toFixed(3)}
                        </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
      )}
    </div>
  ) : <></>;
}

export default Weather;
