import React from 'react';
import ContactBg from '../../../assets/images/contact-bg.jpg';
import useTitle from '../../../hooks/useTitle';

const Contact = () => {
  useTitle('Contact');

  return (
    <section
      className='hero my-12'
      style={{
        background: `url(${ContactBg})`,
      }}
    >
      <div className='form-control p-12'>
        <h4 className='text-center text-2xl text-secondary font-bold'>Contact Us</h4>
        <h1 className='text-center text-white text-3xl my-4 font-semibold'>
          Stay connected with us
        </h1>
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          className='input input-bordered input-secondary w-full max-w-sm'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input input-bordered input-secondary w-full max-w-sm my-4'
        />
        <textarea
          className='textarea textarea-secondary'
          placeholder='Your message'
        ></textarea>

        <div className='flex justify-center my-8'>
          <button className='btn btn-primary'>
            <span className='font-medium capitalize text-lg text-white '>
              Submit
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
