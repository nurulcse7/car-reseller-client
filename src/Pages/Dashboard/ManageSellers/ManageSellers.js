import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading';
import ConfirmationModal from './ConfirmationModal';

const ManageSellers = () => {
  const [deletingSeller, setDeletingSeller] = useState(null);
  const closeModal = () => {
    setDeletingSeller(null);
  };

  const {
    data: sellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      try {
        const res = await fetch(
          'https://car-reseller-server.vercel.app/sellers',
          {
            headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteSeller = (seller) => {
    fetch(`https://car-reseller-server.vercel.app/sellers/${seller._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Seller ${seller.name} deleted successfully`);
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className='text-3xl text-center mb-5'>
        Manage Sellers: {sellers?.length}
      </h2>
      <div className='overflow-x-auto text-white'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>
              <th>Remove Seller</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>
                  <div className='avatar'>
                    <div className='w-24 rounded-full'>
                      <img src={seller.image} alt='' />
                    </div>
                  </div>
                </td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.brand}</td>
                <td>
                  <label
                    onClick={() => setDeletingSeller(seller)}
                    htmlFor='confirmation-modal'
                    className='btn btn-sm btn-error'
                  >
                    Delete
                  </label>
                </td>
                <td>
                  {' '}
                  <button className='btn btn-sm btn-secondary capitalize'>
                    unverified
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingSeller && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingSeller.name}. It cannot be recover.`}
          successAction={handleDeleteSeller}
          successButtonName='Delete'
          modalData={deletingSeller}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageSellers;
