import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading';

const AddSeller = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);
  const navigate = useNavigate();

  const handleAddSeller = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const seller = {
            name: data.name,
            email: data.email,
            brand: data.brand,
            image: imgData.data.url,
          };
          // save doctor information to the database
          fetch('https://car-reseller-server.vercel.app/sellers', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(seller),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate('/dashboard/managesellers');
            });
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className='w-96 p-7'>
      <h2 className='text-4xl font-bold text-center mb-3'>Add A Seller</h2>
      <form onSubmit={handleSubmit(handleAddSeller)}>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            {' '}
            <span className='label-text text-lg'>Name</span>
          </label>
          <input
            type='text'
            {...register('name', {
              required: 'Name is Required',
            })}
            placeholder='seller name'
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            {' '}
            <span className='label-text text-xl'>Email</span>
          </label>
          <input
            type='email'
            {...register('email', {
              required: true,
            })}
            placeholder='seller email'
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            {' '}
            <span className='label-text text-lg'>Category</span>
          </label>
          <input
            type='text'
            {...register('brand', {
              required: 'Category-Brand is Required',
            })}
            placeholder='car brand or category'
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.brand && (
            <p className='text-red-500'>{errors.brand.message}</p>
          )}
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            {' '}
            <span className='label-text text-xl'>Photo</span>
          </label>
          <input
            type='file'
            {...register('image', {
              required: 'Photo is Required',
            })}
            className='input input-bordered w-full max-w-xs p-2 mb-3'
          />
          {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
        </div>
        <input
          className='btn btn-primary w-full mt-4'
          value='Create Seller'
          type='submit'
        />
      </form>
    </div>
  );
};

export default AddSeller;
// 76-1
