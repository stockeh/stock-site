import React from 'react';

import machineLearning from '../assets/projects/machine-learning.json';
import distributedSystems from '../assets/projects/distributed-systems.json';
import bigData from '../assets/projects/big-data.json';

import { Row, Col, Card } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';

import './Projects.css';

function CustomCard({ card_id, item, show }) {
  return (
    <Card className='text-left'>
      <Card.Header className='card-header'>
        <button
          className='btn card-header-text text-left'
          type='button'
          data-toggle='collapse'
          data-target={'#collapse' + card_id}
        >
          <h5>{item.title}</h5>
        </button>
      </Card.Header>
      <div id={'collapse' + card_id} className={'collapse' + show}>
        <div className='card-body'>
          <p className='card-text'>{item.desc}</p>
          <span>
            {item.link ? (
              <span>
                <a target='_blank' rel='noopener noreferrer' href={item.link} className='icon'>
                  <FaGithub />
                </a>
                <span>&nbsp;&nbsp;</span>
              </span>
            ) : null}
            {item.paper ? (
              <a target='_blank' rel='noopener noreferrer' href={item.paper} className='icon'>
                <RiFilePaper2Line />
              </a>
            ) : null}
          </span>
        </div>
      </div>
    </Card>
  );
}

function Category({ section, data }) {
  return (
    <Row id={section.replace(/\s+/g, '')}>
      <Col lg={3} sm={12}>
        <div className='line' /> {/*d-none d-lg-block*/}
        <div className='sticky-category sticky-top'>
          <div className='word'>
            <h3>{section}</h3>
          </div>
        </div>
      </Col>
      <div className='col-lg-9 col-sm-12'>
        {data.map((item, index) => (
          <div key={section.replace(/\s+/g, '') + index}>
            <CustomCard
              item={item}
              card_id={section.replace(/\s+/g, '') + index}
              show={index === 0 ? ' show' : ''}
            />
            <br />
          </div>
        ))}
        <br />
      </div>
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
