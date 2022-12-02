import React from 'react';
import useTitle from '../../hooks/useTitle';

const About = () => {
  useTitle('About');

  return (
    <div>
      <h1 className='text-center text-3xl mt-24'>
        Welcome to About Us Page!!!
      </h1>
      <h3 className='text-center text-xl mt-5 mb-72'>
        This is About Us Page that is under development... will soon be updated
      </h3>
    </div>
  );
};

export default About;
