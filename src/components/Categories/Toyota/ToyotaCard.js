import React from 'react';

const ToyotaCard = ({ toyota, setCarInfo }) => {
  const { img, title, location, org_price, sale_price, years_use, posted, seller } =
    toyota;
  return (
    <div className='card w-96 bg-gray-200 dark:bg-base-200 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={img} alt='Toyota' className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{title}</h2>
        <p>Location: {location} </p>
        <p>Original Price: $ {org_price} </p>
        <p>Resale Price: $ {sale_price} </p>
        <p>Years of uses: {years_use} </p>
        <p>Post published: {posted} </p>
        <p>Seller Name: <input type="checkbox" defaultChecked className="checkbox checkbox-xs checkbox-accent ml-1 mr-1 tooltip tooltip-top" data-tip='Seller verified if checked' />  {seller} </p>
        <div className='card-actions'>
          <label htmlFor='booking-modal' className='btn btn-primary'
          onClick={() => setCarInfo(toyota)}
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ToyotaCard;
