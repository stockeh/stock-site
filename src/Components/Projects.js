import React, { useState, useRef } from 'react';
import { Row, Col, Card, Collapse } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';

import machineLearning from '../assets/projects/machine-learning.json';
import distributedSystems from '../assets/projects/distributed-systems.json';
import bigData from '../assets/projects/big-data.json';
import './Projects.css';

function CustomCard({ card_id, item, initialShow }) {
  const [show, setShow] = useState(initialShow);
  const collapseRef = useRef(null);

  const toggleCollapse = () => {
    setShow(!show);
  };

  return (
    <Card className='text-start'>
      <Card.Header
        className='card-header'
        style={{
          borderBottom: show ? '1px solid var(--mui-palette-grey-400)' : '0px',
        }}
      >
        <button
          className='btn card-header-text text-start'
          onClick={toggleCollapse}
          aria-expanded={show}
          aria-controls={`collapse${card_id}`}
        >
          <h5>{item.title}</h5>
        </button>
      </Card.Header>

      <Collapse in={show}>
        <div ref={collapseRef} id={`collapse${card_id}`}>
          <div className='card-body'>
            <p className='card-text'>{item.desc}</p>
            <span>
              {item.link && (
                <span>
                  <a target='_blank' rel='noopener noreferrer' href={item.link} className='icon'>
                    <FaGithub />
                  </a>
                  <span>&nbsp;&nbsp;</span>
                </span>
              )}
              {item.paper && (
                <a target='_blank' rel='noopener noreferrer' href={item.paper} className='icon'>
                  <RiFilePaper2Line />
                </a>
              )}
            </span>
          </div>
        </div>
      </Collapse>
    </Card>
  );
}

function Category({ section, data }) {
  return (
    <Row id={section.replace(/\s+/g, '')}>
      <Col lg={3} sm={12} className='sticky-parent'>
        <div className='line' />
        <div className='sticky-category'>
          <div className='word'>
            <h3>{section}</h3>
          </div>
        </div>
      </Col>
      <Col lg={9} sm={12}>
        {data.map((item, index) => (
          <div key={section.replace(/\s+/g, '') + index}>
            <CustomCard
              item={item}
              card_id={section.replace(/\s+/g, '') + index}
              initialShow={index === 0}
            />
            <br />
          </div>
        ))}
        <br />
      </Col>
    </Row>
  );
}

function Projects() {
  return (
    <div className='project-layout'>
      <Category section='Machine Learning' data={machineLearning} />
      <Category section='Distributed Systems' data={distributedSystems} />
      <Category section='Big Data' data={bigData} />
    </div>
  );
}

export default Projects;