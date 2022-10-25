import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import blogs from '../assets/blogs/blogs.json';

import './Blogs.css';

const MAX_LENGTH = 250;

function Blogs() {
  return (
    <div>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {blogs.map((item, idx) =>
          !item.private ? (
            <Col key={idx}>
              <Link to={item.dir} className='blogs-card-link'>
                <Card className='mt-3 h-100'>
                  <Card.Img
                    className='blogs-cardimg'
                    variant='top'
                    src={require(`../assets/blogs/md/${item.dir}/${item.src}`)}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description.length > MAX_LENGTH
                        ? item.description.substring(0, MAX_LENGTH) + '...'
                        : item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ) : null
        )}
      </Row>
      <br />
      <br />
    </div>
  );
}

export default Blogs;
