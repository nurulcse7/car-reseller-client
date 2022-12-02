import React, { useContext } from 'react';
import Categories from '../../../components/Categories/Categories/Categories';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Faq from '../Faq/Faq';
import InfoCards from '../InfoCards/InfoCards';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  useTitle('Home');
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className='mx-5'>
      <Banner></Banner>
      <Advertised></Advertised>
      <InfoCards></InfoCards>
      <div className='divider mb-24 mt-8 bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Categories></Categories>
      <div className='divider mb-24 mt-8 bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Testimonial></Testimonial>
      <div className='divider mb-24 mt-8 bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Faq></Faq>
      <div className='divider mb-24 mt-8 bg-gray-200 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
