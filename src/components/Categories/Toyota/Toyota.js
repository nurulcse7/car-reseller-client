import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../../Pages/Shared/Loading';
import ToyotaBookingModal from './ToyotaBookingModal';
import ToyotaCard from './ToyotaCard';

const Toyota = () => {
  useTitle('Toyota');
  const [carInfo, setCarInfo] = useState(null);
  const { loading } = useContext(AuthContext);

  const [toyotas, setToyotas] = useState([]);
  useEffect(() => {
    fetch('https://car-reseller-server.vercel.app/toyotas')
      .then((res) => res.json())
      .then((data) => setToyotas(data));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div>
        <h1 className='text-center text-4xl font-bold my-8'>
          BRAND: <span className='text-secondary'>TOYOTA</span>{' '}
        </h1>
      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8'>
        {toyotas.map((toyota) => (
          <ToyotaCard
            key={toyota._id}
            toyota={toyota}
            setCarInfo={setCarInfo}
          ></ToyotaCard>
        ))}
      </div>
      {carInfo && (
        <ToyotaBookingModal
          carInfo={carInfo}
          setCarInfo={setCarInfo}
        ></ToyotaBookingModal>
      )}
    </div>
  );
};

export default Toyota;
