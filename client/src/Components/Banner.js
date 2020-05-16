import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';
import Payment from './Payments/Payment';

import './Banner.css';

function Banner() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className='banner'>
        <h1 className='banner-title'>
          Jason <br />
          Stock
        </h1>
      </div>
      <div className='description'>
        <p>
          Masters student studying Computer Science at Colorado State
          University, Fort Collins, CO. Currently a Graduate Teaching Assistant
          involved with the senior level Introduction to Distributed Systems
          course. Research interests include: machine learning in climate
          informatics, neural network interpretation, big data analytics and
          structured peer-to-peer systems.{' '}
          <code className='i-like-coffee' onClick={handleShow}>
            I like coffee (click me)!
          </code>
        </p>
      </div>
      {/* INFO: temporary animation false until React update */}
      <Modal show={showModal} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>For the Love of Coffee!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Support my research with founding for coffee</p>
          <Payment />
        </Modal.Body>
      </Modal>
      <br />
      <br />
    </>
  );
}

export default Banner;
