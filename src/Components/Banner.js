import React from 'react';

import './Banner.css';

function Banner() {
  return (
    <>
      <div className='banner'>
        <h1 className='banner-title'>Jason Stock</h1>
      </div>
      <br />
      <div className='description'>
        <p>
          <span className='bio'>Bio:</span> I am a Ph.D. candidate in the Department of Computer
          Science at <a href='https://compsci.colostate.edu'>Colorado State University (CSU)</a>. My
          current research focuses on developing new methods for trustworthy and explainable
          artificial intelligence specifically for applications in the environmental sciences. I am
          currently collaborating with the{' '}
          <a href='https://www.ai2es.org'>
            NSF AI Institute for Research on Trustworthy AI in Weather, Climate, and Coastal
            Oceanography (AI2ES)
          </a>
          . Recent work has focused on using machine learning to improve vertical profiles of
          temperature and moisture for severe weather forecasting. I earned B.S. and M.S. degrees in
          Computer Science with a minor in Mathematics from CSU.
        </p>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Banner;
