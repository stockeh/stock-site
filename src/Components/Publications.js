import React from 'react';
import pubs from '../assets/publications/pubs.json';
import { Row, Col, Button } from 'react-bootstrap';
import './Publications.css';

const MAX_LENGTH = 250;
const NAME = 'Jason Stock';

function References({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <Row key={item.title.replace(/\s+/g, '') + index}>
          <Col lg={8} sm={12}>
            <h4>{item.title}</h4>
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
            <Button size='sm' href='https://arxiv.org/abs/2106.09757'>
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

function Publications() {
  return (
    <div className='publications-layout'>
      <References data={pubs} />
    </div>
  );
}

export default Publications;
