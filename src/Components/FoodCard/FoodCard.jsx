import React, { useContext } from 'react';
import { AuthContext } from '../../providers/Authprovider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = item => {
    console.log(item);
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, price, email: user.email }
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the card",
              showConfirmButton: false,
              timer: 700
            });
          }
        })
    }
    else {
      Swal.fire({
        title: "Please Login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login NOW"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }





  }
  // rahat be careful , ekhane item er ekta props ache and second one ekta parameter .
  return (
    <div className="card w-96 shadow-xl ">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className='bg-slate-800 p-2 absolute right-0 mt-4 mr-4 text-white rounded'>${price}</p>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline mt-1 border-1 border-b-4 text-black ">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;