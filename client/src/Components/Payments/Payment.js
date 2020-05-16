import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Col, Row } from 'react-bootstrap';

import CardInput from './CardInput';

const stripePromise = loadStripe('pk_test_f7aJ12nXr4LGqA0soluBBjzr00gCCbkeOT');

export default function Payment(props) {
  const [paymentVal, setPaymentVal] = useState(5);

  return (
    <>
      <Row noGutters={true} className='text-center'>
        <Col>
          <RangeSlider
            value={paymentVal}
            min={1}
            max={10}
            variant='info'
            onChange={(e) => setPaymentVal(parseInt(e.target.value))}
          />
        </Col>
      </Row>
      <br />
      <Elements stripe={stripePromise}>
        <CardInput paymentVal={paymentVal} />
      </Elements>
    </>
  );
}
