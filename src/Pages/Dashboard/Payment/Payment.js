import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  // console.log(booking);
  const navigation = useNavigation();
  const { title, price, place } = booking;
  if (navigation.state === 'loading') {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className='text-3xl ml-12'>Please Payment Now!</h3>
      <span className='divider'></span>
      <p className='text-xl ml-12'>
        Please pay <strong className='text-secondary'>${price}</strong> for your
        booked <strong className='text-secondary'>{title}</strong> and <br />
        see you in <strong className='text-secondary'>{place}</strong>.
      </p>

      <div className='w-96 m-12 '>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
