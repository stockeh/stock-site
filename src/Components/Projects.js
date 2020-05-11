import React from 'react';

import './Projects.css';
import machineLearning from '../assets/projects/machine-learning.json';
import distributedSystems from '../assets/projects/distributed-systems.json';
import bigData from '../assets/projects/big-data.json';

import { FaGithub } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';

function Card({ card_id, item, show }) {
  return (
    <div className='card text-left'>
      <div className='card-header'>
        <button
          className='btn card-header-text text-left'
          type='button'
          data-toggle='collapse'
          data-target={'#collapse' + card_id}
        >
          <h5>{item.title}</h5>
        </button>
      </div>
      <div id={'collapse' + card_id} className={'collapse' + show}>
        <div className='card-body'>
          <p className='card-text'>{item.desc}</p>
          <span>
            <a href={item.link} className='icon'>
              <FaGithub />
            </a>
            <span>&nbsp;&nbsp;</span>
            {item.paper ? (
              <a href={item.paper} className='text-dark'>
                <RiFilePaper2Line />
              </a>
            ) : (
              <div></div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

function Category({ section, data }) {
  return (
    <div className='row' id={section.replace(/\s+/g, '')}>
      <div className='col-lg-3 col-sm-12'>
        <div className='line' /> {/*d-none d-lg-block*/}
        <div className='sticky-category sticky-top'>
          <div className='word'>
            <h3>{section}</h3>
          </div>
        </div>
      </div>
      <div className='col-lg-9 col-sm-12'>
        {data.map((item, index) => (
          <div>
            <Card
              item={item}
              card_id={section.replace(/\s+/g, '') + index}
              show={index === 0 ? ' show' : ''}
            />
            <br />
          </div>
        ))}
        <br />
      </div>
    </div>
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
