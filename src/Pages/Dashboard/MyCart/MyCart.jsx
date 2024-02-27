import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum,item)=>item.price + sum,0)
  return (
    <div className='uppercase'>
      <Helmet>
        <title>Bistro Boss | MyCart</title>
      </Helmet>
      <div>
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl toFixed(2)">Total Price: {total.toFixed(2)}</h3>
        <button className="btn w-28 btn-warning">Pay</button>
      </div>
    </div>
  );
};

export default MyCart;