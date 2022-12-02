import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ carInfo, setCarInfo }) => {
  const { title, sale_price } = carInfo;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const place = form.place.value;
    console.log(name, email, title, price, phone, place);

    const booking = {
      name,
      email,
      title,
      price,
      phone,
      place,
    };
    console.log(booking);
    setCarInfo(null); // close modal after click BOOK NOW
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
            onSubmit={handleBooking}
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
            <input
              className='btn btn-primary w-full'
              type='submit'
              value='Submit'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
