import React from 'react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import FeaturedImg from '../../../assets/home/featured.jpg'

const Featured = () => {
  return (
    <div>
      <Sectiontitle heading={"Fetured item"} subHeading={"check it out"}></Sectiontitle>
      <div>
        <img src={FeaturedImg} alt="" />
      </div>
      <div>
        <p>Aug 22 , 2025</p>
        <p className='uppercase'>Where can i get some ?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic minima excepturi iste, aliquid molestias maiores velit! Odio natus nemo quaerat eveniet provident libero optio iste aliquid eaque, beatae fuga. Consectetur fuga recusandae nobis doloremque dignissimos quaerat ipsa provident facere tempora? Repudiandae illo voluptatibus aspernatur ad repellendus amet quaerat nisi. Libero.</p>

      </div>
    </div>

  );
};

export default Featured;