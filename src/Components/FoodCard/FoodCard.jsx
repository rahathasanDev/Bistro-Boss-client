import React from 'react';

const FoodCard = ({item}) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 shadow-xl ">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className='bg-slate-800 p-2 absolute right-0 mt-4 mr-4 text-white rounded'>${price}</p>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline mt-2  border-1 border-b-4 text-black ">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;