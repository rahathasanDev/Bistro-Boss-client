import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0)
  return (
    <div className='w-11/12'>
      <Helmet>
        <title>Bistro Boss | MyCart</title>
      </Helmet>
      <div className='uppercase font-semibold items-center space-x-3  flex justify-evenly mb-10 mt-10'>
        <h3 className="text-3xl">Total Items:{cart.length}</h3>
        <h3 className="text-3xl toFixed(2)">Total Price: ${total.toFixed(2)}</h3>
        <button className="btn btn-warning w-28">Pay</button>
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className='bg-base-200 '>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => <tr key={item._id}>
              <td>
                {index + 1}
              </td>
              <td>

                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Your food" />
                  </div>

                </div>
              </td>
              <td>
                {item.name}
              </td>
              <td className='text-end'>${item.price}</td>
              <td>
                <button className="btn btn-ghost  bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
              </td>
            </tr>)}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;