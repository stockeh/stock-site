import React from 'react';
import lit from '../assets/literature/lit.json';
import { Row, Col, Button } from 'react-bootstrap';
import './Literature.css';

const MAX_LENGTH = 250;
const NAME = 'Jason Stock';

function References({ data }) {
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
              dangerouslySetInnerHTML={{
                __html: item.authors.replace(NAME, '<strong>' + NAME + '</strong>'),
              }}
            />
            <p className='conf'>{item.conf}</p>
            <Button target='_blank' rel='noopener noreferrer' size='sm' href={item.pdf}>
              PDF
            </Button>
            <br />
            <br />
          </Col>
          <Col lg={4} sm={8}>
            <img alt={item.logo} className='img-fluid' src={item.logo} />
          </Col>
        </Row>
      ))}
    </div>
  );
}

function Literature() {
  return (
    <div className='literature-layout'>
      <References data={lit} />
    </div>
  );
}

export default Literature;
