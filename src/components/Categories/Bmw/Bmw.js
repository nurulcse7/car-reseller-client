import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../../Pages/Shared/Loading';
import BmwBookingModal from './BmwBookingModal';
import BmwCard from './BmwCard';

function Bmw() {
  useTitle('BMW');
  const [carInfo, setCarInfo] = useState(null);
  // const [bmws, setBmws] = useState([]);
  // useEffect(() => {
  //   fetch('https://car-reseller-server.vercel.app/bmws')
  //     .then((res) => res.json())
  //     .then((data) => setBmws(data));
  // }, []); // closed 74-3

  const {
    data: bmws = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['bmws'],
    queryFn: async () => {
      const res = await fetch(`https://car-reseller-server.vercel.app/bmws`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div>
        <h1 className='text-center text-4xl font-bold my-8'>
          BRAND: <span className='text-secondary'>BMW</span>
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
        {bmws.map((bmw) => (
          <BmwCard key={bmw._id} bmw={bmw} setCarInfo={setCarInfo}></BmwCard>
        ))}
      </div>
      {carInfo && (
        <BmwBookingModal
          carInfo={carInfo}
          setCarInfo={setCarInfo}
          refetch={refetch}
        ></BmwBookingModal>
      )}
    </div>
  );
}

export default Bmw;
