import React from 'react';
import lit from '../assets/literature/lit.json';
import { Row, Col, Button } from 'react-bootstrap';
import { useTheme } from '@mui/material/styles';

import './Literature.css';

const MAX_LENGTH = 250;
const NAME = 'Jason Stock';

function References({ data, isDarkMode }) {
  return (
    <div>
      {data.map((item, index) => (
        <Row key={item.title.replace(/\s+/g, '') + index}>
          <Col lg={8} sm={12}>
            <h5>{item.title}</h5>
            <p className='abstract'>
              {item.abstract.length > MAX_LENGTH
                ? item.abstract.substring(0, MAX_LENGTH) + '...'
                : item.abstract}
              <br />
              <span>&mdash;</span>
            </p>
            <div
              className='authors'
              dangerouslySetInnerHTML={{
                __html: item.authors.replace(NAME, '<strong>' + NAME + '</strong>'),
              }}
            />
            <ul className='conf-list'>
              {item.conf.map((cc, ci) => (
                <li key={cc.replace(/\s+/g, '') + ci}>
                  <p className='conf'>{cc}</p>
                </li>
              ))}
            </ul>
            <span>
            <Button target='_blank' rel='noopener noreferrer' size='sm' href={item.pdf}>
              Paper
            </Button>
            {item.poster ? (
              <Button target='_blank' rel='noopener noreferrer' size='sm' href={item.poster}>
                Poster
              </Button>
            ) : null}
            </span>
            <br />
            <br />
          </Col>
          <Col lg={4} sm={8}>
            <img
              style={isDarkMode ? { filter: 'invert(93%) saturate(120%) hue-rotate(180deg)'} : {}}
              alt={item.logo}
              className='img-fluid'
              src={require(`../assets/literature/media/${item.logo}`)}
            />
          </Col>
        </Row>
      ))}
    </div>
  );
}

function Literature() {
  const theme = useTheme();
  var isDarkMode = theme.palette.mode === 'dark';
  return (
    <div className='literature-layout'>
      <References data={lit} isDarkMode={isDarkMode}/>
    </div>
  );
}

export default Literature;
