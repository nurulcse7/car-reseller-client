import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className='carousel-item relative w-full py-24'>
      <div className='carousel-img'>
        <img src={image} alt='' className='w-full rounded-xl' />
      </div>
      <div className='absolute flex justify-end transform -translate-y-1/2 left-8 top-1/3'>
        <h1 className='text-6xl font-bold text-white'>
          Mega Sale
          <br />
          <span className='text-secondary rounded-3xl'>15% Off</span>
          <br />
          Reconditioned,
          <br />
          Second-Hand
        </h1>
      </div>

      <div className='absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4'>
        <Link to='/categories'><button className='btn btn-primary btn-lg font-bold'>Book Now</button></Link>
      </div>
      <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
        <a href={`#slide${prev}`} className='btn btn-circle mr-5 '>
          <span
            className='tooltip tooltip-left capitalize'
            data-tip='Left Scroll'
          >
            {' '}
            ❮
          </span>
        </a>
        <a href={`#slide${next}`} className='btn btn-circle'>
          <span
            className='tooltip tooltip-left capitalize'
            data-tip='Right Scroll'
          >
            ❯
          </span>
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
