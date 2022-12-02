import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Pages/Shared/Loading';
// import useTitle from '../../../hooks/useTitle';

const MyOrders = () => {
  // useTitle('MyOrders')
  const { user, loading } = useContext(AuthContext);

  const url = `https://car-reseller-server.vercel.app/bmwBookings?email=${user?.email}`;
  const { data: bmwBookings = [] } = useQuery({
    queryKey: ['bmwBookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const url2 = `https://car-reseller-server.vercel.app/mercedesBookings?email=${user?.email}`;

  const { data: mercedesBookings = [] } = useQuery({
    queryKey: ['mercedesBookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url2, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const url3 = `https://car-reseller-server.vercel.app/toyotaBookings?email=${user?.email}`;
  const { data: toyotaBookings = [] } = useQuery({
    queryKey: ['toyotaBookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url3, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className=''>
      <h3 className='text-3xl text-center mb-5'>My Orders</h3>
      <div className='overflow-x-auto text-white'>
        <table className='table w-full'>
          <thead className=''>
            <tr>
              <th>No.</th>
              <th>
                {' '}
                <span title='Meeting Location'>Meeting</span>
              </th>
              <th>Phone</th>
              <th>Title</th>
              <th>Price</th>
              <th>Payments</th>
            </tr>
          </thead>
          <tbody>
            {bmwBookings &&
              bmwBookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.place}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.title}</td>
                  <td>{booking.price}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className='btn btn-primary btn-sm'>Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className='text-green-500'>Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
          <tbody>
            {mercedesBookings &&
              mercedesBookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.place}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.title}</td>
                  <td>{booking.price}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className='btn btn-primary btn-sm'>Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className='text-green-500'>Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
          <tbody>
            {toyotaBookings &&
              toyotaBookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.place}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.title}</td>
                  <td>{booking.price}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className='btn btn-primary btn-sm'>Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className='text-green-500'>Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
