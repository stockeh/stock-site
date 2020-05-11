import React from 'react';

import './Banner.css';

function Banner() {
  return (
    <div>
      <div className='banner'>
        <h1 className='banner-title'>
          Jason <br />
          Stock
        </h1>
      </div>
      <div className='description'>
        <p>
          Masters student studying Computer Science at Colorado State
          University, Fort Collins, CO. Currently a Graduate Teaching Assistant
          involved with the senior level Introduction to Distributed Systems
          course. Research interests include: machine learning in climate
          informatics, neural network interpretation, big data analytics and
          structured peer-to-peer systems.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Banner;
