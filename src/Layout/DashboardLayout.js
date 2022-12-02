import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import Footer from '../Pages/Shared/Footer/Footer';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Header from '../Pages/Shared/Header/Header';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
  useTitle('Dashboard');
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div className='bg-white text-black dark:bg-base-100 dark:text-white'>
      <div className='divider mt-8 bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Header></Header>
      <div className='divider bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Navbar></Navbar>
      <div className='divider mb-12 mt-8 bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <div className='drawer drawer-mobile'>
        <input
          id='dashboard-drawer'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content '>
          <Outlet></Outlet>
        </div>
        <div className='drawer-side bg-gray-200 text-black dark:bg-base-200 dark:text-white'>
          <label htmlFor='dashboard-drawer' className='drawer-overlay sm:top-0'></label>
          <ul className='menu p-4 w-80 text-xl'>
            <li className='hover:text-secondary'>
              <Link to='/dashboard'>My Orders</Link>
            </li>
            {isAdmin && (
              <>
                <li className='hover:text-secondary'>
                  <Link to='/dashboard/allusers'>All users</Link>
                </li>
                <li className='hover:text-secondary'>
                  <Link to='/dashboard/addseller'>Add A Seller</Link>
                </li>
                <li className='hover:text-secondary'>
                  <Link to='/dashboard/managesellers'>Manage Seller</Link>
                </li>
                <li className='hover:text-secondary'>
                  <Link to='/dashboard/addproduct'>Add A Product</Link>
                </li>
                <li className='hover:text-secondary'>
                  <Link to='/dashboard/manageproducts'>My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className='divider bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
