import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import Blog from './Blog';

import './Miscellaneous.css';

function Miscellaneous() {
  return (
    <div className='Miscellaneous'>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card className='mt-3'>
              <Card.Img
                className='cardimg'
                variant='top'
                src='files/progressive_cascade_nets_1.png'
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <Blog markdown='page.md' /> */}
    </div>
  );
}

export default Miscellaneous;
