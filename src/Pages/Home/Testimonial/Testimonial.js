import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Mohammad Ali',
      img: people1,
      review:
        'Smooth transaction and very helpful staff made my first car buying experience easy. Nurul Islam and the crew have given me their full attention to all my car needs. Thanks again for the great help!',
      location: 'Louisville',
    },
    {
      _id: 2,
      name: 'Wilson Henry',
      img: people2,
      review:
        'You brace yourself going into a car dealer. Prepare mentally for the oncoming “pushy salesmen.” And then… they don’t come. Instead, you get friendly people who dont try to “push” anything on you. They’re helpful. They listen. They’re accommodating. That was my experience with Car Reseller',
      location: 'California',
    },
    {
      _id: 3,
      name: 'Jhankar Mahbub',
      img: people3,
      review:
        'I was looking for a pre owner vehicle on the lot. I was looking for a car with low mileage and had my type of interest in vehicles. I was placed in the perfect car. It looked brand new being a used car and my customer service rep handled me very well. He was very knowledgeable about the vehicles there, kind and knew just what I wanted based on my interests. I walked out happily and appreciate the great customer service.',
      location: 'Texas',
    },
  ];

  return (
    <section className='my-16'>
      <div className='flex justify-between'>
        <div className='ml-4'>
          <h4 className='text-2xl text-secondary font-bold'>Testimonial</h4>
          <h2 className='text-4xl font-semibold'>What does our customer say?</h2>
        </div>
        <figure>
          <img className='w-24 lg:w-48 ' src={quote} alt='' />
        </figure>
      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
