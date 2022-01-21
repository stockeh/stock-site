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
            </p>
            <div
              className='authors text-muted'
              dangerouslySetInnerHTML={{
                __html: item.authors.replace(NAME, '<strong>' + NAME + '</strong>'),
              }}
            />
            <Button target='_blank' rel='noopener noreferrer' size='sm' href={item.pdf}>
              PDF
            </Button>
            <br />
            <br />
          </Col>
          <Col></Col>
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
