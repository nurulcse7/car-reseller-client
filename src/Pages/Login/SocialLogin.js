import React, { useContext } from 'react';
import { setAuthToken } from './auth';
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setAuthToken(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      
      <p className='text-center'>
        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full hover:bg-secondary'>
        <FcGoogle/><span className='ml-2 capitalize text-lg '>Google</span>
        </button>
      </p>
    </div>
  );
};

export default SocialLogin; 