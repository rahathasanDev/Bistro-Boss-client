import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import sliderimg1 from '../../../assets/home/slide1.jpg'
import sliderimg2 from '../../../assets/home/slide2.jpg'
import sliderimg3 from '../../../assets/home/slide3.jpg'

const ChefRecommends = () => {
  return (
    <div>
      <div className='text-4xl p-4 rounded-lg md:text-5xl font-serif bg-slate-300 w-3/4 md:w-3/5 mx-auto'>Call Us:01744209241</div>
      <Sectiontitle heading={"Chef Recommends"}
        subHeading={"You should try"}></Sectiontitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sliderimg1} alt="" />
          <button className='btn btn-outline mt-2  border-1 border-b-4 text-black mr-10  '>ADD TO CART</button>
        </SwiperSlide>

        <SwiperSlide><img src={sliderimg2} alt="" />
          <button className='btn btn-outline mt-2  border-1 border-b-4 text-black mr-10 '>ADD TO CART</button></SwiperSlide>
        <SwiperSlide><img src={sliderimg3} alt="" /><button className='btn btn-outline mt-2  border-1 border-b-4 text-black mr-10 '>ADD TO CART</button></SwiperSlide>
        <SwiperSlide><img src={sliderimg1} alt="" /><button className='btn btn-outline mt-2  border-1 border-b-4 text-black mr-10 '>ADD TO CART</button></SwiperSlide>
        <SwiperSlide><img src={sliderimg2} alt="" /><button className='btn btn-outline mt-2  border-1 border-b-4 text-black mr-10 '>ADD TO CART</button></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default ChefRecommends;