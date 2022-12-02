import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../../Pages/Shared/Loading';
import MercedesBookingModal from './MercedesBookingModal';
import MercedesCard from './MercedesCard';

const Mercedes = () => {
  useTitle('Mercedes');
  const [carInfo, setCarInfo] = useState(null);
  const { loading } = useContext(AuthContext);

  const [mercedeses, setMercedeses] = useState([]);
  useEffect(() => {
    fetch('https://car-reseller-server.vercel.app/mercedeses')
      .then((res) => res.json())
      .then((data) => setMercedeses(data));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div>
        <h1 className='text-center text-4xl font-bold my-8'>
          BRAND: <span className='text-secondary'>MERCEDES-BENZ</span>
        </h1>
      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8'>
        {mercedeses.map((mercedes) => (
          <MercedesCard
            key={mercedes._id}
            mercedes={mercedes}
            setCarInfo={setCarInfo}
          ></MercedesCard>
        ))}
      </div>
      {carInfo && (
        <MercedesBookingModal
          carInfo={carInfo}
          setCarInfo={setCarInfo}
        ></MercedesBookingModal>
      )}
    </div>
  );
};

export default Mercedes;
