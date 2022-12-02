import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const CallUs = () => {
  useTitle('Call')
  return (
    <div className='card lg:card-side bg-base-100 shadow-xl'>
      <figure>
        <img src='https://i.ibb.co/JRwVbWS/call-us1.jpg' alt='Album' />
      </figure>
      <div className='card-body'>
        <h2 className='text-2xl text-center font-bold'>More info!</h2>
        <p className='text-lg text-center font-bold'>Call us now to know details</p>
        <div className='card-actions justify-center'>
          <Link to='/'><button className='btn btn-primary '>Back to Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CallUs;

// https://i.ibb.co/JRwVbWS/call-us1.jpg
