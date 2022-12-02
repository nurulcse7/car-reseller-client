import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MercedesBookingModal = ({ carInfo, setCarInfo }) => {
  const { title, sale_price } = carInfo;
  const { user } = useContext(AuthContext);

  const handleMercedesBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const place = form.place.value;
    // console.log(name, email, title, price, phone, place);
    // to submit modal-form, when click BOOK NOW,
    // to know - Nusrat nus@gmail.com BMW M 500 016019123456 Dhaka Gulshan
    const booking = {
      name,
      email,
      title,
      price,
      phone,
      place,
    };
    // console.log(booking);
    // setCarInfo(null); // close modal after click BOOK NOW
    fetch('https://car-reseller-server.vercel.app/mercedesBookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // to submit modal-form, when click BOOK NOW, and stored in db
        // to know - {acknowledged: true, insertedId: '6382bbc199e55e91aa7bd413'}
        if (data.acknowledged) {
          setCarInfo(null);
          toast.success('You have booked a Mercedes car');
          // refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <form
            onSubmit={handleMercedesBooking}
            className='grid grid-cols-1 gap-3 mt-10 '
          >
            <input
              name='name'
              type='text'
              disabled
              placeholder='Your Name'
              defaultValue={user?.displayName}
              className='input w-full input-bordered'
            />
            <input
              name='email'
              type='email'
              disabled
              placeholder='Email Address'
              defaultValue={user?.email}
              className='input w-full input-bordered'
            />
            <input
              name='title'
              type='text'
              disabled
              placeholder='Product Name'
              defaultValue={title}
              className='input w-full input-bordered'
            />
            <input
              name='price'
              type='text'
              disabled
              placeholder='Product Price'
              defaultValue={sale_price}
              className='input w-full input-bordered'
            />
            <input
              name='phone'
              type='text'
              placeholder='Phone Number'
              className='input w-full input-bordered'
              required
            />
            <input
              name='place'
              type='text'
              placeholder='Meeting Location'
              className='input w-full input-bordered'
              required
            />
            <br />
            {user?.uid ? (
              <input
                className='btn btn-primary w-full'
                type='submit'
                value='Submit'
              />
            ) : (
              <Link to='/login'>
                <button
                  className='btn btn-primary w-full'
                  type='submit'
                  value='Submit'
                >
                  {' '}
                  For submit login first
                </button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default MercedesBookingModal;
