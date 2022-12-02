import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Typewriter from 'typewriter-effect';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
  return (
    <div className='bg-white text-black dark:bg-base-100 dark:text-white'>
      <div className='text-center mt-1 text-cyan-600'>
        <Typewriter
          options={{
            strings: [
              'We buy and sell second hand cars',
              'We provide two years service warranty',
              'Integrity is the main goal of our business',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className='divider bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Header></Header>
      <div className='divider bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Navbar></Navbar>
      <div className='divider bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Outlet></Outlet>
      <div className='divider bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
// for dark/light theme class (bg-white text-black dark:bg-base-100 dark:text-white )
