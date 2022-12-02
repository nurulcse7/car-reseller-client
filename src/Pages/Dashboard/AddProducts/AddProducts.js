import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading';

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);
  const navigate = useNavigate();

  const handleAddProduct = (data) => {
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
          const product = {
            image: imgData.data.url,
            brand: data.brand,
            name: data.name,
            place: data.place,
            prices: data.prices,
            price: data.price,
            years: data.years,
            posted: data.posted,
            owner: data.owner,
            condition: data.condition,
            phone: data.phone,
          };
          // save doctor information to the database
          fetch('https://car-reseller-server.vercel.app/products', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate('/dashboard/manageproducts');
            });
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className='w-96 p-7'>
      <h2 className='text-4xl font-bold text-center mb-3'>Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-xl'>Photo</span>
          </label>
          <input
            type='file'
            {...register('image', { required: 'Car photo is required' })}
            className='input input-bordered w-full max-w-xs p-2 mb-3'
            title='Car photo size 1280 ✖ 854'
          />

          {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-lg'>Category</span>
          </label>
          <input
            type='text'
            placeholder='car brand or category'
            {...register('brand', {
              required: 'Category or brand is required',
            })}
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.brand && (
            <p className='text-red-500'>{errors.brand.message}</p>
          )}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-lg'>Name</span>
          </label>
          <input
            type='text'
            placeholder='product name'
            {...register('name', {
              required: 'Product name/title is required',
            })}
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-xl'>Location</span>
          </label>
          <input
            type='text'
            placeholder='meeting location'
            {...register('place', { required: 'Location is required' })}
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.place && (
            <p className='text-red-500'>{errors.place.message}</p>
          )}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-xl'>Original Price</span>
          </label>
          <input
            type='text'
            placeholder='purchase price'
            {...register('prices', { required: 'Purchase price is required' })}
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.prices && (
            <p className='text-red-500'>{errors.prices.message}</p>
          )}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-xl'>Resale Price</span>
          </label>
          <input
            type='text'
            placeholder='resale price'
            {...register('price', { required: 'Resale price is required' })}
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.price && (
            <p className='text-red-500'>{errors.price.message}</p>
          )}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-xl'>Years of Uses</span>
          </label>
          <input
            type='text'
            placeholder='How many years are you using?'
            {...register('years', { required: 'Duration of uses' })}
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.years && (
            <p className='text-red-500'>{errors.years.message}</p>
          )}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-xl'>Post Published</span>
          </label>
          <input
            type='text'
            placeholder='Posted date'
            {...register('posted', { required: 'Published date is required' })}
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.posted && (
            <p className='text-red-500'>{errors.posted.message}</p>
          )}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-xl'>Seller Name</span>
          </label>
          <input
            type='text'
            placeholder='seller name'
            {...register('owner', { required: 'Seller name is required' })}
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.owner && (
            <p className='text-red-500'>{errors.owner.message}</p>
          )}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-xl'>Condition</span>
          </label>
          <select
            type='text'
            title='condition type(excellent, good, fair)'
            {...register('condition', {
              required: 'Car condition is required',
            })}
            className='input input-bordered w-full max-w-xs mb-3'
          >
            <option>Select one</option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
          </select>
          {errors.condition && (
            <p className='text-red-500'>{errors.condition.message}</p>
          )}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text text-xl'>Phone Number</span>
          </label>
          <input
            type='text'
            placeholder='seller phone number'
            {...register('phone', { required: 'A phone number is required' })}
            className='input input-bordered w-full max-w-xs mb-3'
          />
          {errors.phone && (
            <p className='text-red-500'>{errors.phone.message}</p>
          )}
        </div>

        <input
          className='btn btn-primary w-full mt-4'
          value='Add A Product'
          type='submit'
        />
      </form>
    </div>
  );
};

export default AddProducts;
// 76-1
