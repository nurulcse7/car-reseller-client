import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import useToken from '../../hooks/useToken';
import useTitle from '../../hooks/useTitle';
import { setAuthToken } from '../Login/auth';

const SignUp = () => {
  useTitle('SignUp');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail); // 75-6
  const navigate = useNavigate();

  if (token) {
    navigate('/');
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError('');

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setAuthToken()
        toast.success('Congratulation! Sign Up Succeed');
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })

          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        setSignUPError(error.message);
      });
  };

  // users data/ info store in db When user SignUp with email and password
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('https://car-reseller-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // navigate('/')
        // getUserToken(email);
        setCreatedUserEmail(email);
      });
  };

  // const getUserToken = (email) => {
  //   fetch(`https://car-reseller-server.vercel.app/jwt?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.accessToken) {
  //         localStorage.setItem('accessToken', data.accessToken);
  //         // setToken(data.accessToken);
  //         navigate('/');
  //       }
  //     });
  // };

  return (
    <div className='h-[800px] flex justify-center items-center bg-gray-200 dark:bg-base-300'>
      <div className='w-96 p-7'>
        <h2 className='text-3xl text-center font-bold'>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
              className='input input-bordered w-full max-w-xs'
              placeholder='full-name'
            />
            {errors.name && (
              <p className='text-red-500'>{errors.name.message}</p>
            )}
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              {' '}
              <span className='label-text text-lg mt-3'>Email</span>
            </label>
            <input
              type='email'
              {...register('email', {
                required: 'Please input the valid email address',
              })}
              className='input input-bordered w-full max-w-xs'
              placeholder='email address'
            />
            {errors.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              {' '}
              <span className='label-text text-lg mt-3'>Password</span>
            </label>
            <input
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password will be a minimum of 6 characters or long',
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    'Please type an uppercase, a special character, and, a number',
                },
              })}
              className='input input-bordered w-full max-w-xs'
              placeholder='uppercase, num and a special'
            />
            {errors.password && (
              <p className='text-red-500'>{errors.password.message}</p>
            )}
          </div>
          <input
            className='btn btn-primary w-full my-3'
            value='Sign Up'
            type='submit'
          />
          {signUpError && <p className='text-red-600'>{signUpError}</p>}
        </form>
        <p>
          Already have an account?{' '}
          <Link className='text-secondary' to='/login'>
            Go to Login
          </Link>
        </p>
        <div className='divider'>OR</div>
        <button className='btn btn-outline w-full hover:bg-secondary'>
          {' '}
          <FcGoogle />
          <span className='ml-2 capitalize text-lg'>Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
