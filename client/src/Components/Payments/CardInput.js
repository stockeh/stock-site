import React, { useState } from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button, Alert, Spinner } from 'react-bootstrap';
import './CardInput.css';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#000',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

// TODO: validate email when change and disable pay option
function validEmail(email) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === false) {
    return false;
  }
}

export default function CardInput(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setProcessing] = useState(false);
  const [alert, setAlert] = useState({});
  const [email, setEmail] = useState('');
  const [ref, setRef] = useState(null);

  const handleSubmit = async (event) => {
    setAlert({});

    // if (email && !validEmail(email)) {
    //   const messeage = 'Must use a valid email address.';
    //   setAlert({
    //     variant: 'danger',
    //     heading: 'Invalid Email Address',
    //     msg: messeage,
    //   });
    //   console.log(messeage);
    //   return;
    // }
    setProcessing(true);
    event.preventDefault();

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const res = await axios.post('/pay', {
      email: email,
      ammount: props.paymentVal,
    });

    const result = await stripe.confirmCardPayment(res.data['client_secret'], {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        },
      },
    });

    if (result.error) {
      setAlert({
        variant: 'danger',
        heading: 'Payment Failed',
        msg: result.error.message,
      });
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setAlert({
          variant: 'success',
          heading: 'Payment Success',
          msg: 'Thank you for your support!',
        });
        ref.clear();
        setEmail(null);
        console.log('success!');
      }
    }
    setProcessing(false);
  };
  console.log();
  return (
    <>
      <input
        id='email'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter email address'
      />
      <CardElement
        id='card-element'
        options={CARD_ELEMENT_OPTIONS}
        onReady={(e) => setRef(e)}
      />
      <Button
        id='payment-button'
        variant='primary'
        onClick={!isProcessing ? handleSubmit : null}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <Spinner animation='border' size='sm' />
        ) : (
          'Pay $' + props.paymentVal
        )}
      </Button>
      {Object.getOwnPropertyNames(alert).length !== 0 ? (
        <Alert
          id='payment-alert'
          variant={alert.variant}
          onClose={() => setAlert({})}
          dismissible
        >
          <Alert.Heading>{alert.heading}</Alert.Heading>
          <p>{alert.msg}</p>
        </Alert>
      ) : null}
    </>
  );
}
