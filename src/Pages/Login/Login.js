import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';
import useTitle from '../../hooks/useTitle';
import SocialLogin from './SocialLogin';

const Login = () => {
  useTitle('Login');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail); // 75-7
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  if (token) {
    navigate(from, { replace: true });
  } // 75-7

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        toast.success('Congrats! You are login');
        // navigate(from, { replace: true });
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        fetch('https://car-reseller-server.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem('car-token', data.token);
            // navigate(from, { replace: true });
          }); // jwt stop here
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className='h-[800px] flex justify-center items-center bg-gray-200 dark:bg-base-300'>
      <div className='w-96 p-7'>
        <h2 className='text-4xl text-center font-bold'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              {' '}
              <span className='label-text text-lg'>Email</span>
            </label>
            <input
              type='email'
              {...register('email', {
                required: 'Please input your email address',
              })}
              className='input input-bordered w-full max-w-xs'
              placeholder='Registered email address'
            />
            {errors.email && (
              <p className='text-red-600'>{errors.email?.message}</p>
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
              })}
              className='input input-bordered w-full max-w-xs'
              placeholder='Your password'
            />
            <label className='label'>
              {' '}
              <span className='label-text'>Forget Password?</span>
            </label>
            {errors.password && (
              <p className='text-red-600'>{errors.password?.message}</p>
            )}
          </div>
          <input
            className='btn btn-primary w-full my-3'
            value='Login'
            type='submit'
          />
          <div>
            {loginError && <p className='text-red-600'>{loginError}</p>}
          </div>
        </form>
        <p className=''>
          No account?{' '}
          <Link className='text-secondary' to='/signup'>
            <span>Please SignUp Now</span>
          </Link>
        </p>
        <div className='divider'>Or</div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;

