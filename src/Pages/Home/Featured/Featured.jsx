import React from 'react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import FeaturedImg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured-item bg-fixed pt-8 my-8'>
      <Sectiontitle heading={"Fetured item"} subHeading={"check it out"}></Sectiontitle>
      <div className='md:flex justify-center items-center py-8 px-16 '>
        <div>
          <img className='rounded-lg' src={FeaturedImg} alt="" />
        </div>
        <div className='md:ml-10 outline outline-2 p-4 rounded-lg bg-black opacity-50 text-white'>
          <p>Aug 22 , 2025</p>
          <p className='uppercase'>Where can i get some ?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat vero quos rerum maxime officiis minima ipsa deleniti placeat? Ipsa vero consectetur architecto repudiandae ratione error excepturi enim in repellat omnis, et sint harum doloribus eaque nam sunt eligendi adipisci porro voluptatibus laudantium. Ut facere nesciunt nam maxime saepe incidunt?</p>
          <button className="btn btn-outline  border-1 border-b-4  mt-5 text-xl ">Read More</button>
        </div>


      </div>
    </div>

  );
};

export default Featured;