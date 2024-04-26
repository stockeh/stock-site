import React from 'react';

import Weather from './Weather';

import './Banner.css';

function Banner({ desc }) {
  return (
    <>
      <div className='banner'>
        <h1 className='banner-title'>Jason Stock</h1>
      </div>
      <br />
      {desc ? (
        <>
          <Weather />
          <div className='description'>
            <p>
              <span className='bio'>Bio:</span> I am a Computer Science PhD candidate at Colorado State University {' '}
              <a target='_blank' rel='noopener noreferrer' href='https://compsci.colostate.edu'>
                (CSU)
              </a>{' '}
              advised by{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://cs.colostate.edu/~anderson'
              >
                Professor Chuck Anderson
              </a>
              . My current research interests are in neuro-inspired attention methods, generative
              diffusion models, creating interpretable-by-design machine learning algorithms, and
              modeling weather and climate change. I am currently collaborating with the NSF AI Institute for Research on Trustworthy AI in Weather, Climate, and Coastal
                Oceanography{' '}
              <a target='_blank' rel='noopener noreferrer' href='https://www.ai2es.org'>
                (AI2ES)
              </a>{' '}
              and the Cooperative Institute for Research in the Atmosphere{' '}
              <a target='_blank' rel='noopener noreferrer' href='https://www.cira.colostate.edu'>
                (CIRA)
              </a>
              . Recent work can be found in the literature and project sections below. I also earned
              BS and MS degrees in Computer Science with a minor in Mathematics from CSU. And some
              fun facts: I enjoy astrophotography, exploring the mountains, and listening to all
              kinds of music from electronic avant-garde to classic rock.
            </p>
          </div>
          <br />
          <br />
          <br />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Banner;
