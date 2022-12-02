import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Bmw from '../Bmw/Bmw';
import Mercedes from '../Mercedes/Mercedes';
import Toyota from '../Toyota/Toyota';

const Categories = () => {
  useTitle('Categories');

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>
          Welcome to <span className='text-secondary'>Cars</span> Categories
        </h1>
        <p className='text-lg my-5'>
          You can choose the car with brand categories
        </p>
      </div>
      <div className='divider bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Bmw></Bmw>
      <div className='divider bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Mercedes></Mercedes>
      <div className='divider bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Toyota></Toyota>
    </div>
  );
};

export default Categories;
