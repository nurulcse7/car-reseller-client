import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png';
import { FaUserLock } from 'react-icons/fa';

const Header = () => {
  const headerItem = (
    <React.Fragment>
      <li>
        <input
          type='text'
          placeholder='Search'
          className='input input-bordered mr-3 rounded-full'
        />
      </li>
      <li>
        <Link className='btn btn-primary mr-2 normal-case'>
          Search Now!
        </Link>
      </li>
      <li className='mr-12'>
        <Link className='btn btn-primary normal-case rounded-lg'>
          <FaUserLock />
        </Link>
      </li>
    </React.Fragment>
  );
  return (
    <div>
      <div className='navbar'>
        <div className='navbar-start'>
          <div className='dropdown'>
            
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content  shadow  bg-gray-200 dark:bg-base-200 rounded-box w-52 xs:hidden'
            >
              {headerItem}
            </ul>
          </div>
          <Link to='/' className='flex flex-row ml-12'>
          <img src={Logo} className='w-10' alt='' />
          <p className='btn btn-ghost normal-case text-4xl font-bold'>
            <span className='text-secondary'>Car</span> Reseller 
          </p>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0  justify-end'>
            {headerItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
