import React from 'react';

import './Banner.css';

function Banner({ desc }) {
  return (
    <>
      <div className='banner'>
        <h1 className='banner-title'>Jason Stock</h1>
      </div>
      <br />
      {(() => {
        if (desc) {
          return (
            <>
              <div className='description'>
                <p>
                  <span className='bio'>Bio:</span> I am a Ph.D. student in the Department of
                  Computer Science at{' '}
                  <a href='https://compsci.colostate.edu'>Colorado State University (CSU)</a>. My
                  current research interests are in simplifying machine learning algorithms,
                  designing interpretable-by-design methods, and explainable artificial
                  intelligence. I am currently collaborating with the{' '}
                  <a href='https://www.ai2es.org'>
                    NSF AI Institute for Research on Trustworthy AI in Weather, Climate, and Coastal
                    Oceanography (AI2ES)
                  </a>{' '}
                  and the{' '}
                  <a href='https://www.cira.colostate.edu'>
                    Cooperative Institute for Research in the Atmosphere
                  </a>
                  . Recent work can be found in the literature and project sections below. I also
                  earned B.S. and M.S. degrees in Computer Science with a minor in Mathematics from
                  CSU. And some fun facts: I enjoy astrophotography, exploring the mountains, and
                  listening to all kinds of music from electronic avant-garde to classic rock.
                </p>
              </div>
              <br />
              <br />
              <br />
            </>
          );
        }
      })()}
    </>
  );
}

export default Banner;
