import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading';
import ProductConfirmationModal from './ProductConfirmationModal';

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
  const closeModal = () => {
    setDeletingProduct(null);
  };

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const res = await fetch(
          'https://car-reseller-server.vercel.app/products',
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

  const handleDeleteProduct = (product) => {
    fetch(`https://car-reseller-server.vercel.app/products/${product._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Product ${product.name} deleted successfully`);
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className='text-3xl text-center mb-5'>
        Manage Products: {products?.length}
      </h2>
      <div className='overflow-x-auto text-white'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Product</th>
              <th>Category</th>
              <th>Name</th>
              <th>Price</th>
              <th>Remove Product</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className='avatar'>
                    <div className='w-24 rounded-full'>
                      <img src={product.image} alt='' />
                    </div>
                  </div>
                </td>
                <td>{product.brand}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <label
                    onClick={() => setDeletingProduct(product)}
                    htmlFor='confirmation-modal'
                    className='btn btn-sm btn-error'
                  >
                    {' '}
                    Delete
                  </label>
                </td>
                <td>
                  {' '}
                  <button
                    className='btn btn-sm btn-secondary capitalize'
                    title='Published to Advertise Page'
                  >
                    Available
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ProductConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingProduct.name}. It cannot be recover.`}
          successAction={handleDeleteProduct}
          successButtonName='Delete'
          modalData={deletingProduct}
          closeModal={closeModal}
        ></ProductConfirmationModal>
      )}
    </div>
  );
};

export default ManageProducts;
