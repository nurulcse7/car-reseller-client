import { Link, useRouteError } from 'react-router-dom';
import NotFound from '../../assets/images/404.png';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <img src={NotFound} className='rounded-full' alt='' />
          <p className='my-6 text-lg'>
            Sorry, an unexpected error has occurred.
          </p>
          <i className='text-secondary text-lg font-semibold'>
            {error.statusText || error.message}
          </i>
          <br />
          <button className='btn btn-primary mt-5 capitalize text-lg'>
            <Link to='/'>Back To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

// img link: https://i.ibb.co/VtX5Rjw/404.png 